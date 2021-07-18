import Component from "../core/Component.js";

export default class Items extends Component {

    template() {
        const { resultItems } = this.$props;

        return `
            <ul>
                ${resultItems.map((item, key) => `
                    <li>
                        ${item}
                        <button class="deleteBtn" data-index="${key}">삭제</button>
                    </li>
                `).join('')}
            </ul>
            <button class="addBtn">추가</button>
        `
    }
    // 모든 이벤트를 this.target 에 등록하여 사용
    setEvent() {
        const { addItem, deleteItem, resultItems } = this.$props;

        this.addEvent('click', '.addBtn', ({target}) => {
            addItem(`item${resultItems.length + 1}`);
        });

        this.addEvent('click', '.deleteBtn', ({target}) => {
            deleteItem(target.dataset.index);
        });
    }
}
