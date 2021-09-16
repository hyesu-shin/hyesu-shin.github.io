import Component from "../core/Component.js";

export default class Header extends Component {

    template() {
        return `
            <div class="hero">
                <div class="hero-body">
                    <div class="header-wrap is-flex is-justify-content-space-between">
                        <h3 class="title is-3">Hello World:)</h3>
                        <h6 class="title is-6">sue's TIL</h6>                                
                    </div>
                </div>
            </div>
        `
    }

    setEvent() {

    }
}
