import Component from "../core/Component.js";

export default class Footer extends Component {

    template() {
        return `
            <div class="hero border-top mt-2">
                <div class="hero-body">
                    <div class="container">
                        <p class="has-text-grey">Made with vanilla javascript.</p>                                
                    </div>
                </div>
            </div>
        `
    }

}
