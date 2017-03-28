'use strict';

// 右侧下部表格

class WrapRightMain extends React.Component {
    render() {
        return React.createElement(
            "div",
            { className: "wrapRightMain" },
            React.createElement(Table, null)
        );
    }
};

// 表格
class Table extends React.Component {
    constructor(props) {
        super(props);
        this.handleSort = this.handleSort.bind(this);
        // 初始化一个空对象
        this.state = { tabitems: [], tabtritems: [], sort: { name: "", dir: "" } };
    }
    componentDidMount() {
        var tt = [{ name: '1', title: '日期', width: '10%', sort: true }, { name: '2', title: '订单号', width: '10%', sort: true }, { name: '3', title: '订单人', width: '10%', sort: true }, { name: '4', title: '门店', sort: true }, { name: '5', title: '实付(元)', width: '10%', sort: true }, { name: '6', title: '找零(元)', width: '10%', sort: true }, { name: '7', title: '抹零(元)', width: '10%', sort: true }, { name: '8', title: '状态', width: '10%' }];
        this.setState({ tabitems: tt });
        var tr = [{ tr }, { tr }, { tr }, { tr }, { tr }, { tr }, { tr }, { tr }];
        this.setState({ tabtritems: tr });
    }
    handleSort(sort) {
        this.setState({ sort: sort });
    }
    render() {

        return React.createElement(
            "table",
            { cellPadding: "0", cellSpacing: "0" },
            React.createElement(
                "tr",
                null,
                this.state.tabitems.map(item => React.createElement(Th, { item: item, sort: this.state.sort, onSort: this.handleSort }))
            ),
            this.state.tabtritems.map(item => React.createElement(Tr, { item: item }))
        );
    }
};

class Tr extends React.Component {
    constructor(props) {
        super(props);

        // 初始化一个空对象
        this.state = { tabtditems: [] };
    }
    componentDidMount() {
        var td = [{ td: "2017-02-13" }, { td: "000000009" }, { td: "1000000" }, { td: "宝山呼兰路店" }, { td: "11111111" }, { td: "2222222" }, { td: "3424" }, { td: "2" }];
        this.setState({ tabtditems: td });
    }

    render() {

        return React.createElement(
            "tr",
            null,
            this.state.tabtditems.map(item => React.createElement(Td, { item: item }))
        );
    }
};

class Th extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        var sort = this.props.sort;
        if (!sort) {
            sort = { name: "", dir: "" };
        }

        if (sort.name != this.props.item.name) {
            sort.dir = "";
        }

        sort.name = this.props.item.name;
        //排序顺序
        if (sort.dir == "asc") {
            sort.dir = "desc";
        } else {
            sort.dir = "asc";
        }

        this.props.onSort(sort);
    }
    render() {
        var img = React.createElement("span", null);
        if (this.props.item.sort) {
            var sort = this.props.sort;
            if (sort && sort.name == this.props.item.name) {
                if (sort.dir == "desc") {
                    img = React.createElement(
                        "span",
                        null,
                        React.createElement("img", { src: "images/htpaixu.png", alt: "", onClick: this.handleClick })
                    );
                } else {
                    img = React.createElement(
                        "span",
                        null,
                        React.createElement("img", { src: "images/htpaixu1.png", alt: "", onClick: this.handleClick })
                    );
                }
            } else {
                img = React.createElement(
                    "span",
                    null,
                    React.createElement("img", { src: "images/htpaixu2.png", alt: "", onClick: this.handleClick })
                );
            }
        }
        var thStyle = {
            width: this.props.item.width
        };
        return React.createElement(
            "th",
            { style: thStyle },
            this.props.item.title,
            " ",
            img
        );
    }
};

class Td extends React.Component {
    render() {
        return React.createElement(
            "td",
            null,
            this.props.item.td
        );
    }
};

// 返回到页面
ReactDOM.render(React.createElement(WrapRightMain, null), document.getElementById("example"));

