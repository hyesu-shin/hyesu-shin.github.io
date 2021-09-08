import Component from "./core/Component.js";
// import Items from "./components/Items.js";
import Header from "./components/Header.js";
// import Contents from "./components/Contents.js";
// import Navigation from "./components/Navigation.js";
import ContentsBody from "./components/ContentsBody.js";
import Footer from "./components/Footer.js";

export default class App extends Component {
    setup() {
        // this.$state = { items: ['item1', 'item2'] };
    }

    template() {
        return `
            <header data-component="header"></header>
            <contents-body data-component="body"></contents-body>
            <footer class="has-background-white-ter" data-component="footer"></footer>
<!--            <items data-component="items"></items>-->
        `;
    }

    // 자식 컴포넌트를 마운트 해주어야 함
    mounted() {
        // const {addItem, deleteItem, resultItems} = this;
        const $header = this.$target.querySelector('[data-component="header"]');
        // const $contents = this.$target.querySelector('[data-component="contents"]');
        // const $navigation = this.$target.querySelector('[data-component="navigation"]');
        const $body = this.$target.querySelector('[data-component="body"]');
        const $footer = this.$target.querySelector('[data-component="footer"]');
        // const $items = this.$target.querySelector('[data-component="items"]');

        new Header($header, {});
        // new Contents($contents, {});
        // new Navigation($navigation, {});
        new ContentsBody($body, {});
        new Footer($footer, {});

        // new Items($items, {
        //     resultItems,
        //     addItem: addItem.bind(this),
        //     deleteItem: deleteItem.bind(this)
        // });
    }

    // get resultItems () {
    //     const { items } = this.$state;
    //     console.log(items);
    //     return items;
    // }
    //
    // addItem (contents) {
    //     const { items } = this.$state;
    //     this.setState({
    //         items: [
    //             ...items,
    //             contents
    //         ]
    //     });
    // }
    //
    // deleteItem (seq) {
    //     const items = [ ...this.$state.items ];
    //     items.splice(seq, 1);
    //     this.setState({items});
    // }
}
