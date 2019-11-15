const template = document.createElement('template')

template.innerHTML=`
    <style>
    :host(){
        display: block;
    }
    
    header {
        background: white;
        text-align: left;
        background: #fff;
        display: flex;
        margin: 0;
        border-bottom: 1px solid #f0f0f0;
    }

    ::slotted(a) {
        -webkit-font-smoothing: antialiased;
        font-family: arial;
        line-height: 20px;
        display: block;
        width: fit-content;
        padding: 20px;
        text-decoration: none;
        color: blue;
    }
    </style>
    <header>
        <slot></slot>
    </header>
` 

class AppHeader extends HTMLElement {
    constructor() {
        super()
        const shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

customElements.define('app-header', AppHeader)