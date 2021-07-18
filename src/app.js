import Component from "./core/Component.js";
import Items from "./components/Items.js";
import Header from "./components/Header.js";

export default class App extends Component {
    setup() {
        this.$state = { items: ['item1', 'item2'] };
    }

    template() {
        return `
            <header data-component="header"></header>
            <items data-component="items"></items>
        `;
    }

    // 자식 컴포넌트를 마운트 해주어야 함
    mounted() {
        const {addItem, deleteItem, resultItems} = this;
        const $header = this.$target.querySelector('[data-component="header"]');
        const $items = this.$target.querySelector('[data-component="items"]');

        new Header($header, {});
        new Items($items, {
            resultItems,
            addItem: addItem.bind(this),
            deleteItem: deleteItem.bind(this)
        });
    }

    get resultItems () {
        const { items } = this.$state;
        console.log(items);
        return items;
    }

    addItem (contents) {
        const { items } = this.$state;
        this.setState({
            items: [
                ...items,
                contents
            ]
        });
    }

    deleteItem (seq) {
        const items = [ ...this.$state.items ];
        items.splice(seq, 1);
        this.setState({items});
    }
}
