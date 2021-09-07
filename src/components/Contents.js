import Component from "../core/Component.js";
import Lists from "./Lists.js";


export default class Contents extends Component {
    setup() {
        this.$state = { items : ['item1', 'item2', 'item3', 'item4'] };
    }

    template() {
        return `
            <div class="tile mt-6">
                <lists data-component="lists"></lists>
            </div>
        `
    }

    // 자식 컴포넌트를 마운트 해주어야 함
    mounted() {
        const { listItems } = this;
        const $lists = this.$target.querySelector('[data-component="lists"]');
        new Lists($lists, {
            listItems
        });
    }

    get listItems() {
        const { items } = this.$state;
        return items;
    }
}
