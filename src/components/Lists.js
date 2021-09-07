import Component from "../core/Component.js";

export default class Lists extends Component {

    template() {
        const { listItems } = this.$props;

        return `
            <div class="list-wrap">
                <ul>
                    ${listItems.map((item, key) => `
                        <li class="box">
<!--                            <figure class="image is-64x64">-->
<!--                            -->
<!--                            </figure>-->
                            ${item}
                            ${key}
                        </li>
                    `).join('')}
                </ul>        
            </div>
        `
    }
}
