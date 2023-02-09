document.addEventListener("DOMContentLoaded", function() {
	// get all our classed blockquote components
	const index = document.querySelectorAll(".quoteback");

	for (var item = 0; item < index.length; item++) {
		let blockquote = index[item];
		
		console.log("Rebuilding blockquote:");
		console.log(blockquote);
		
		// get blockquote data
		const text = blockquote.innerHTML;
		const url = blockquote.cite;
		const author = blockquote.getAttribute("data-author");
		const title = blockquote.getAttribute("data-title");
		const favicon = `https://s2.googleusercontent.com/s2/favicons?domain_url=${url}&sz=64`

		// create a new component with that data
		const component = `
			<quoteback-component url="${url}" text="${encodeURIComponent(text)}" author="${author}" title="${title}" favicon="${favicon}"> 
			</quoteback-component>    
			`;
		// nest the component inside a div
		let newDiv = document.createElement('div');
		newDiv.innerHTML = component;
		
		// replace the original blockquote with our div
		blockquote.parentNode.replaceChild(newDiv, blockquote);
		
		let template = document.createElement('template');
		template.innerHTML = `
			<style>${quoteStyle}</style>
			<div class="quoteback-container" role="quotation" aria-labelledby="quoteback-author" tabindex="0">
				<div id="quoteback-parent" class="quoteback-parent">
					<div class="quoteback-content"></div>
				</div>
				<div class="quoteback-head">
					<div class="quoteback-avatar"><img alt="source website favicon" class="mini-favicon" src="" /></div>
					<div class="quoteback-metadata">
						<div class="metadata-inner">
							<div aria-label="" id="quoteback-author" class="quoteback-author"></div>
							<div aria-label="" class="quoteback-title"></div>
						</div>
					</div>
					<div class="quoteback-backlink"><a target="_blank" aria-label="go to the full text of this quotation" rel="noopener" href="" class="quoteback-arrow"><span class="right-arrow">&#8594;</span></a></div>
				</div>
			</div>`;

		class QuoteBack extends HTMLElement {
			constructor() {
				super();
				this.attachShadow({ mode: 'open' });
				this.shadowRoot.appendChild(template.content.cloneNode(true));
				
				this.text = decodeURIComponent(this.getAttribute('text'));
				this.author = this.getAttribute('author');
				this.title = decodeURIComponent(this.getAttribute('title'));
				this.url = this.getAttribute('url')
				this.favicon = this.getAttribute('favicon');
				this.editable = this.getAttribute('editable');
				this.darkmode = this.getAttribute('darkmode')
				
			};

			connectedCallback() {
				console.info('connected');
				if (this.editable == "true") {
					this.shadowRoot.querySelector('.quoteback-author').setAttribute("contenteditable", true);
					this.shadowRoot.querySelector('.quoteback-title').setAttribute("contenteditable", true);
				}

				if (this.darkmode == "true") {
					this.shadowRoot.querySelector('.quoteback-container').classList += " dark-theme";
				}

				if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
					this.shadowRoot.querySelector('.quoteback-container').classList += " dark-theme";
				}

				this.shadowRoot.querySelector('.quoteback-content').innerHTML = decodeURIComponent(this.getAttribute('text'));
				this.shadowRoot.querySelector('.mini-favicon').src = this.getAttribute('favicon');

				this.shadowRoot.querySelector('.quoteback-author').innerHTML = this.getAttribute('author');
				this.shadowRoot.querySelector('.quoteback-author').setAttribute("aria-label", "quote by " + this.getAttribute('author'));

				this.shadowRoot.querySelector('.quoteback-title').innerHTML = decodeURIComponent(this.getAttribute('title'));
				this.shadowRoot.querySelector('.quoteback-title').setAttribute("aria-label", "title: " + decodeURIComponent(this.getAttribute('title')));

				this.shadowRoot.querySelector('.quoteback-arrow').href = this.getAttribute('url');

				if (this.getAttribute('editable') == "true") {
					this.shadowRoot.querySelector('.quoteback-author').setAttribute("contenteditable", true);
					this.shadowRoot.querySelector('.quoteback-title').setAttribute("contenteditable", true);
				};
			};

		}

		// if quoteback-component is already defined
		if (customElements.get('quoteback-component')) {
			null;
		} else {
			window.customElements.define('quoteback-component', QuoteBack)
		}
	}
});