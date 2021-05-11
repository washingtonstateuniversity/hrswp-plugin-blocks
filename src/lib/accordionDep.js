/**
 * Accordion (Collapsible Panels)
 *
 */
class Accordion {
	/**
	 * Instantiates an accordion on a given accordion block.
	 *
	 * @param {Node} accordionBlock An accordion block to make interactive.
	 */
	constructor( accordionBlock ) {
		this._parent = accordionBlock;
		this._panels = this._parent.querySelectorAll( '.accordion-panel' );
		this._headings = this._parent.querySelectorAll(
			'.accordion-panel-heading'
		);
		this._expandAllTrigger = this._parent.querySelector(
			'#open-all-panels'
		);
		this._collapseAllTrigger = this._parent.querySelector(
			'#close-all-panels'
		);

		this.expand = this.expand.bind( this );
		this.expandAll = this.expandAll.bind( this );
		this.collapse = this.collapse.bind( this );
		this.collapseAll = this.collapseAll.bind( this );
		this.toggle = this.toggle.bind( this );

		this._setupPanels();
		this._setupHeadingButtons();

		this._triggers = this._parent.querySelectorAll(
			'.accordion-panel-trigger'
		);
		this._addEventListeners();

		this.activate();
	}

	activate() {
		this._parent.classList.add( 'accordion-active' );
	}

	expand( trigger, targetPanel ) {
		this._setAriaExpanded( trigger, 'true' );
		this._setAriaHidden( targetPanel, 'false' );
	}

	expandAll() {
		this._panels.forEach( ( panel ) => {
			this._setAriaHidden( panel, 'false' );
		} );

		this._triggers.forEach( ( trigger ) => {
			this._setAriaExpanded( trigger, 'true' );
		} );
	}

	collapse( trigger, targetPanel ) {
		this._setAriaExpanded( trigger, 'false' );
		this._setAriaHidden( targetPanel, 'true' );
	}

	collapseAll() {
		this._panels.forEach( ( panel ) => {
			this._setAriaHidden( panel, 'true' );
		} );

		this._triggers.forEach( ( trigger ) => {
			this._setAriaExpanded( trigger, 'false' );
		} );
	}

	toggle( e ) {
		const trigger = e.target;
		const targetPanel = document.getElementById(
			trigger.getAttribute( 'aria-controls' )
		);

		e.preventDefault();

		if ( this._isExpanded( trigger ) ) {
			this.collapse( trigger, targetPanel );
			return;
		}

		this.expand( trigger, targetPanel );
	}

	_setupPanels() {
		this._panels.forEach( ( panel ) => {
			panel.setAttribute( 'aria-hidden', true );
		} );
	}

	_setupHeadingButtons() {
		this._headings.forEach( ( heading ) => {
			const targetId = heading.nextElementSibling.id;
			const Button = document.createElement( 'button' );
			const ButtonText = heading.textContent;

			heading.innerHTML = '';

			Button.setAttribute( 'type', 'button' );
			Button.setAttribute( 'aria-controls', targetId );
			Button.setAttribute( 'id', `${ targetId }-trigger` );
			Button.classList.add( 'accordion-panel-trigger' );

			heading.appendChild( Button );
			Button.appendChild( document.createTextNode( ButtonText ) );
		} );
	}

	_addEventListeners() {
		this._triggers.forEach( ( trigger ) => {
			trigger.addEventListener( 'click', this.toggle );
		} );
		this._expandAllTrigger.addEventListener( 'click', this.expandAll );
		this._collapseAllTrigger.addEventListener( 'click', this.collapseAll );
	}

	_isExpanded( trigger ) {
		return trigger.getAttribute( 'aria-expanded' ) === 'true';
	}

	_setAriaHidden( element, state ) {
		return element.setAttribute( 'aria-hidden', state );
	}

	_setAriaExpanded( element, state ) {
		return element.setAttribute( 'aria-expanded', state );
	}
}

/**
 * Initializes all accordion blocks on the page.
 */
function init() {
	const accordionBlocks = /** @type {NodeList} */ document.querySelectorAll(
		'.wp-block-hrswp-accordion'
	);

	accordionBlocks.forEach( ( accordionBlock ) => {
		new Accordion( accordionBlock );
	} );
}
init();
