import Component from "./core/Component.js";
import Items from "./components/Items.js";
import Header from "./components/Header.js";

export default class App extends Component {
    setup() {
        this.$state = { items: ['item1', 'item2'] };
    }

    template() {
        const { items } = this.$state;
        return `
            <div class="header"></div>
            <div class="items"></div>
        `
    }

    mounted() {
        const $header = this.$target.getElementsByClassName('header');
        const $items = this.$target.getElementsByClassName('items');

        new Header($header, {});
        new Items($items, {});
    }
}
