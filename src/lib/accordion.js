/**
 * Accordion (Collapsible Panels)
 *
 */
class Accordion {
	/**
	 * Instantiates an accordion on a given accordion block.
	 *
	 * @param {Node}   accordionBlock An accordion block to make interactive.
	 * @param {number} ref            A unique numeric reference for each accordion.
	 */
	constructor(accordionBlock, ref) {
		this._parent = accordionBlock;
		this._ref = ref;
		this._panels = this._parent.querySelectorAll(
			'.wp-block-hrswp-accordion-section'
		);
		this._headings = this._parent.querySelectorAll(
			'.hrswp-accordion-heading'
		);

		this.expand = this.expand.bind(this);
		this.expandAll = this.expandAll.bind(this);
		this.collapse = this.collapse.bind(this);
		this.collapseAll = this.collapseAll.bind(this);
		this.toggle = this.toggle.bind(this);

		this._setupPanels();
		this._setupControls();
		this._setupHeadingButtons();

		this._expandAllTrigger = this._parent.querySelector('#open-all-panels');
		this._collapseAllTrigger =
			this._parent.querySelector('#close-all-panels');
		this._triggers = this._parent.querySelectorAll(
			'.accordion-panel-trigger'
		);

		this._addEventListeners();

		this.activate();
	}

	activate() {
		this._parent.classList.add('accordion-active');
	}

	expand(trigger, targetPanel) {
		this._setAriaExpanded(trigger, 'true');
		this._setAriaHidden(targetPanel, 'false');
	}

	expandAll() {
		this._panels.forEach((panel) => {
			this._setAriaHidden(panel, 'false');
		});

		this._triggers.forEach((trigger) => {
			this._setAriaExpanded(trigger, 'true');
		});
	}

	collapse(trigger, targetPanel) {
		this._setAriaExpanded(trigger, 'false');
		this._setAriaHidden(targetPanel, 'true');
	}

	collapseAll() {
		this._panels.forEach((panel) => {
			this._setAriaHidden(panel, 'true');
		});

		this._triggers.forEach((trigger) => {
			this._setAriaExpanded(trigger, 'false');
		});
	}

	toggle(e) {
		const trigger = e.target;
		const targetPanel = document.getElementById(
			trigger.getAttribute('aria-controls')
		);

		e.preventDefault();

		if (this._isExpanded(trigger)) {
			this.collapse(trigger, targetPanel);
			return;
		}

		this.expand(trigger, targetPanel);
	}

	_setupPanels() {
		let i = 0;

		this._headings.forEach((heading) => {
			const headingParent = heading.parentNode;

			headingParent.setAttribute(
				'id',
				`accordion-${this._ref}-panel-${i}`
			);
			headingParent.before(heading);

			i++;
		});

		this._panels.forEach((panel) => {
			panel.setAttribute('aria-hidden', true);
			panel.setAttribute('aria-labelledby', `${panel.id}-trigger`);
		});
	}

	_setupControls() {
		const ToggleAllWrapper = document.createElement('div');
		const OpenAllButton = document.createElement('button');
		const CloseAllButton = document.createElement('button');

		ToggleAllWrapper.classList.add('controls');

		this._parent.insertBefore(ToggleAllWrapper, this._parent.firstChild);

		ToggleAllWrapper.appendChild(OpenAllButton);
		ToggleAllWrapper.appendChild(CloseAllButton);

		OpenAllButton.setAttribute('type', 'button');
		OpenAllButton.setAttribute('id', 'open-all-panels');
		OpenAllButton.appendChild(document.createTextNode('Open All'));

		CloseAllButton.setAttribute('type', 'button');
		CloseAllButton.setAttribute('id', 'close-all-panels');
		CloseAllButton.appendChild(document.createTextNode('Close All'));
	}

	_setupHeadingButtons() {
		this._headings.forEach((heading) => {
			const targetId = heading.nextElementSibling.id;
			const Button = document.createElement('button');
			const ButtonText = heading.textContent;

			heading.innerHTML = '';

			Button.setAttribute('type', 'button');
			Button.setAttribute('aria-controls', targetId);
			Button.setAttribute('id', `${targetId}-trigger`);
			Button.classList.add('accordion-panel-trigger');

			heading.appendChild(Button);
			Button.appendChild(document.createTextNode(ButtonText));
		});
	}

	_addEventListeners() {
		this._triggers.forEach((trigger) => {
			trigger.addEventListener('click', this.toggle);
		});
		this._expandAllTrigger.addEventListener('click', this.expandAll);
		this._collapseAllTrigger.addEventListener('click', this.collapseAll);
	}

	_isExpanded(trigger) {
		return trigger.getAttribute('aria-expanded') === 'true';
	}

	_setAriaHidden(element, state) {
		return element.setAttribute('aria-hidden', state);
	}

	_setAriaExpanded(element, state) {
		return element.setAttribute('aria-expanded', state);
	}
}

/**
 * Initializes all accordion blocks on the page.
 */
function init() {
	const accordionBlocks = /** @type {NodeList} */ document.querySelectorAll(
		'.wp-block-hrswp-accordions'
	);

	let i = 0;
	accordionBlocks.forEach((accordionBlock) => {
		new Accordion(accordionBlock, i);
		i++;
	});
}
init();
