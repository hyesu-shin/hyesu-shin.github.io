import Component from "./core/Component.js";
// import Items from "./components/Items.js";
import Header from "./components/Header.js";
import Contents from "./components/Contents.js";
import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer.js";

export default class App extends Component {
    setup() {
        // this.$state = { items: ['item1', 'item2'] };
    }

    template() {
        return `
            <header data-component="header"></header>
            <div class="has-background-white-ter">
                <section class="container mb-6">
                    <div class="contents-wrap">
                        <div class="tile is-ancestor">
                            <contents class="tile is-parent is-9" data-component="contents"></contents>
                            <navigation class="tile is-parent is-3" data-component="navigation"></navigation>
                        </div>
                    </div>
                </section>
                <footer data-component="footer"></footer>
            </div>
<!--            <items data-component="items"></items>-->
        `;
    }

    // 자식 컴포넌트를 마운트 해주어야 함
    mounted() {
        const {addItem, deleteItem, resultItems} = this;
        const $header = this.$target.querySelector('[data-component="header"]');
        const $contents = this.$target.querySelector('[data-component="contents"]');
        const $navigation = this.$target.querySelector('[data-component="navigation"]');
        const $footer = this.$target.querySelector('[data-component="footer"]');
        // const $items = this.$target.querySelector('[data-component="items"]');

        new Header($header, {});
        new Contents($contents, {});
        new Navigation($navigation, {});
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
