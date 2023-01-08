// Keycode for the ENTER and ESC keys.
const ENTER_KEY = 13;  // CONST 是什么？ 常数？
const ESC_KEY = 27;
// Initial todo items in a stringified format.               // 每个是 元素 是吧？
/// 一开始把所有item 以STRING 形式 储存起来  (新笔记用 ///)
/// JAVASCRIPT 表示 ARRAY 用 [ ]，跟R差不多
/// JAVASCRIPT 表示 OBJECT 用 { }
/// 所以下面是： 一个ARRAY 里 装了 2 个 OBJECT
const stringifiedTodoItems = `
    [
        {
            "name": "This item is done",
            "done": true
        },
        {
            "name": "This item is not done",
            "done": false
        }
    ]
`;
/* const objects = [
    {
        index: 1,          这些相当于 JAVA 的 FIELDS
        name: "hello"
    },
    {
        index: 2,
        name: "hello"
    }
 ]
 */



// 这是个 ARRAY， 因为有好几个 OBJECT， 但写成了STRING, SO 得转换为 ARRAY
// 用下面的 JSON.PARSE

// JSON: JAVASCRIPT OBJECT NOTATION
// 里面含有很多信息的结构


// JAVASCRIPT 里的 METHOD 叫做 FUNCTION，哦 C++ R 也是叫METHOD / FUNCTION


/**
* Model describes how todo items are stored and
* specifies the methods that are used to modify the todo list.
*
* Note that model should NOT have interaction with the UI,
* i.e. no DOM manipulation here.     DOM 操作指涉及 UI操作？因为定义说 “修改网页”，而网页就是 UI 吧
* MVC，即Model-View-Controller，分别对应着一个页面的数据层，视图层，逻辑层。  MODEL是 数据层
* Instead, the DOM should be updated in controller and view.
*/
/// MODEL 是个非常大的 OBJECT， 有一个FIELD: 叫做 ITEMS
const model = { // 这算是什么？ CLASS 吗？不是吧，JAVA的CLASS是自己单独开一页的
    items: JSON.parse(stringifiedTodoItems),  // 这个是 FIELD， ITEMS 是个ARRAY
    // 把 STRING 转换成 ITEMS
    // ITEMS 里共 2 个元素
    // 每个 元素 有 2 个 FIELDS，
    // 分别是 “NAME” 和 “是否DONE” 信息

    /**
    * Count the total number of items
    * and the number of done items.
    * @return {Object} { numItems: ..., numDoneItems: ... }
    */
    countItems: function() { ///Javascript 不可省略 this
        const numItems = this.items.length; // CONST ： 这个值以后不可以修改
        let numDoneItems = 0; // let : 这个值以后可以修改 因为NUMITEM已经数好了，而NUMDONEITEM还没开始数（这里就像是 初始值？
        // 写 FOR LOOP: JAVASCRIPT的简写 用 forEach()
        this.items.forEach(function(item) { // 有输入系数： 跟一个函数，函数的参数：每个元素是什么 // items 里的 元素 是 item
            // 对于每个元素，咱做什么事情：
            if (item.done === true) {// Javascript 用 3个 = 来 比较
                numDoneItems++;
            }
        });
        return {
            // 左边 = OBJECT FIELD 的名字
            // 右边 = 变量 的值：const numItems = this.items.length;
            // 现在只是刚好 同名 而已
            numItems: numItems, // : 左右 2 边不一定一样
            numDoneItems: numDoneItems,
            // 这里 ：是在干什么？
            // 把右边灌入 左边的 FIELD ？
        };
        // RETURN 为什么是 这样 RETURN 的 ？？？？？*******************************************************************


    }, // countItems 是方程名字 （哇，好像 R 啊 ！
    // Javascript 的 （）内系数 没有 Type，只有系数名字， 因为JAS 不检查 类型，
    // 只能写 变量名字
    // JAVA SIGNATURE 会写 系数 类型
    // 但是 会在 COMMENT 里 声明 系数 类型 （但这个不是最好的方法（Z 因为无法检查类型是吧?
    // 导致 只有在运行时才会报错， 编译，COMPILE阶段 都不会报错
    // 那这样就很不好了啊， 不提前告诉你错误 等到最后 才说错了
    // 解决方案： 用 Typescript, 它会抓住错误 （Z 类型错误？
    // 因为 咱之前是 把 类型写到COMMENT里， 这样只起到提醒作用，无法真的上手检查和排查错误





    /**
    * Create a todo item, set it as undone and add it to the "items" array.
    * Items should have the following format:
    * { name: ..., done: true/false }
    * @param {string} name - the name of the new item
    */
    createItem: function(name) {
        // INPUT VALIDATION：
        if (typeof name === 'string' && name.length > 0) { // STRING 不空？ 字母数>0
            // typeof ？？
            // You can use the typeof operator to find the data type of a JavaScript variable.
            // EX: typeof "John"                 // Returns "string"
            //     typeof 3.14                   // Returns "number"
            this.items.push({ // add it to the "items" array
                name: name, // 这种 ： 是什么意思？
                done: false, // 指把 右边 灌进 左边的 FIELD ？
/// false 右边不用 ， 吧？
            }); /// 这个 { } 是 OBJECT 的写法
        }
    },




    /**  对 ARRAY 里的 元素 进行 一些 操作
    * Change the name of the specified todo item.
    * @param {Number} index - the index of the item in the zero-indexed "items" array
    * @param {string} name - the item's new name
    */
    changeItemName: function(index, name) {
        this.items[index].name = name;
    },





    /**
    * Delete the specified item.
    * @param {Number} index - the index of the item in the zero-indexed "items" array
    */
    deleteItem: function(index) { //、 要知道具体对哪一个操作，所以需要 INDEX
 /// 用 SPLICE( )
 /// 古早法： 新建个 TEMP ARRAY，把想要留下的 放进 新数组，要删的 不放进
        // const newItems = [];
        // for (let i = 0; i < this.items.length; i++) {
        //     // if (i === index) { /// 找到目标： 不放进
        //     //     continue;
        //     // }
        //     // const curItem = this.items[i];/// 从旧数组取出来 存着
        //     // this.newItems.push(curItem);/// 放进 新数组里
        //     /// 直接说 不等于的 放进去新数组， 更快
        //     if (i !== index) {
        //         const curItem = this.items[i];
        //         this.newItems.push(curItem); /// ? 这个需要 this ？不是 LV 吗？
        //     }
        // }
        // this.items = newItems; /// 新数组 成为 FIELD 了
        /// 高级：
        this.items.splice(index, 1); /// 直接删去 目标
        /// 用上面的古早方法 无法删除啊 ？?? 还是得用高级法
    },
    /// CONST 不让作 REASSIGN
    /// 但是可以往 CONST 的 数组里 加东西 （网上
    /// 不可：
    ///  const obj = { }
    ///  obj = XXX





    /**
    * Delete all items.
    */
    deleteAllItems: function() {
        this.items = []; /// 简单，设成 空数组
    },






    /**
    * Toggle 切换，转换 the status of the specified item.
    * If it is done, change it to undone.
    * If it is undone, change it to done.
    * @param {Number} index - the index of the item in the zero-indexed "items" array
    */
    toggleItem: function(index) {
        const item = this.items[index]; /// receiver 接收
        item.done = !item.done; /// 直接 把 相反的 填进去
        /// 哇 一步就行了？ 我还以为得 TEMP 啥的，
        /// 像 221 的 SWAP TREE 那么多步骤，原来 一步到位
        ///
    },





    /** 要做的 比想象的多
    * Toggle the status of all items.
    * If an item is done, change it to undone.
    * If an item is undone, change it to done.
    */
    toggleAllItems: function() {
        //const count = this.countItems(); /// 是个Object
        /// 不是，这里CALL个METHOD为什么要用到 THIS?
        /// 你又不是 找 FIELD
        //const numItems = count.numItems;
        //const numDoneItems = count.numDoneItems;
        /// 这里把 OBJECT 的 2个FIELDS 拆分成了 2个变量 （此过程 叫做：destructuring
            /// 高级写法 DESCTRUCTURING：
            // const {numItems, numDoneItems} = count;
            const {numItems, numDoneItems} = this.countItems(); // 不是，这里为什么要变成 THIS 啊？
            const markItemAsDone = (item) => {item.done = true}; // ( ) 内是系数吧
            const markItemAsUndone = (item) => {item.done = false};
            const allItemsDone = numItems === numDoneItems; /// 物品总数与已经做完的一样 = 全完成了
           ///                  问句            TRUE 则执行         FALSE 则执行   （R 也有这种语法
            this.items.forEach(allItemsDone ? markItemAsUndone : markItemAsDone); //*******************
            /// 如所有元素已完成 = 把他们全变成未完成
            /// 如至少有 1个未完成 = 把他们全变成完成  （这里合理？？ 这份CODE不是我设计的，怕思路想法理解有误差
            /// 哦，这里对应 上面的CHECKBOX 与下面的任务列表， *******************************************
            /// 下面的列表如有1个已打勾，那咱打最上面的总体勾的时候，就把下面剩下的未打勾的 去打勾
            /// 如下面全都 没打勾， 那咱 上面打总体勾的时候， 下面就 全打勾
            /// 只有当下面全都打勾了， 那我打上面总体勾时，下面才会 变成 全未完成
            /// Z： 只要有 1 个不跟大体一样，那上面打总体勾 就会让下面跟随 大部队   (OK) 这个总体勾 =~ 让少数服从多数 ！！！！！
            /// Z: 全空，打总体勾= 总体 为 勾；   全打勾， 打总体勾= 总体 为 不打勾  （OK
            /// 以上是 高级写法，下面是常规写法 VIA FOR LOOP：正常人更容易想到 （确实 我只能想到这个
            // for (const item of this.items) { /// loop iterate over iterable objects
            //     if (allItemsDone) {
            //         item.done = true;
            //     } else {
            //         item.done = false;
            //     }
            // }



    },
};



/**
* Controller servers as a bridge between model and view.           之前的 HTML 的TODO 都是 EVENT HANDLER
*                                                                  用户按键盘，我需要做出对应的操作
*                                                                // 这些对应的操作， 都放在 CONTROLLER 里
*                                                                // EVENT HANDLER 一般做2件事：1.修改MODEL里的东西。2。把修改的东西呈献给用户 VIA VIEW
* In every controller method, remember to update the UI
* by calling view.displayTodoItems(). 更新界面所有TODOITEM 的展示方式
*
* Difference between controller and view:
* Only event handling对用户操作做出响应 methods should be included in controller
* (e.g. methods that respond to an add-item event).
* 控制器 负责 放‘和用户打交道’ 的 METHODS
*
* Pure display methods and methods that are not
* directly related to the todo list
* should be included in view instead.
*/
const controller = { /// CONTROLLER 里很多 方法 都是跟 MODEL 同名的
                    /// 然后 CONTROLLER 的METHOD 里 CALL MODEL 里同名的 METHOD
    /**
    * Read the content from the input field
    * and create a new todo item.
    */
    createItem: function() {
        // 接收 输入 是吧  （210  /// document 指整个网页
        const createItemInput = document.getElementById("create-item-input");
        // 作为参数 传给它     createItem是个方程 在上边
        model.createItem(createItemInput.value);
        // 更新 USER INTERFACE
        // 重新设置为 空String. 因为上一行已经提交了，所以此方程内的这个 可以任由处置了
        createItemInput.value = ""; // 网页，输入东西，点击加号=提交，提交之后 显示空了
        // 上面输入框空了， 下面的 列 更新了 （刚输入的 进入了下面的 列）
        // 更新 列 是属于 UI VIEW 的操作
        // 更新 用户所看到的界面
        // 所以要 召唤 VIEW:
        view.displayTodoItems(); // 在 View class 的 displayTodoItems 方程
        // 此方程把  TodoItem 展现出来, 把一个一个LI， LIST ITEM 元素 加到 UI 上面，
        //   并不会对 MODEL 有任何影响。
        // 所以 CONTROLLER 函数里面2件事，
        //1. 把读取到的值 加到 MODEL 里面的 TODO LIST 里面，
        //2. 让UI 跟 MODEL 同步，把新加的 ITEM 展现出来
    },



    /**
    * 2 keyboard events should be monitored:
    * pressing the ENTER key and pressing the ESC key.             回车键 是吧？   ESC又是啥？
    *
    * Update the name of the selected todo item
    * when the ENTER key is pressed.
    *
    * Exit editing mode and revert to the original name
    * when the ESC key is pressed.
    * @param {Event} event - the event paramter that is available to event handlers
    */
    updateItemNameOnKeyUp: function(event) { // OnKeyUp 表明： 是个 EVENT HANDLER 函数
        // 用来处理 用户按下按钮， 咱要做什么处理， 对应HTML 里的 TODO  。          HTML第40行的： onkeyup="TODO">
        // 读取：
        const updateItemInput = event.target; // 获取 输入的名字
        // createItem 是通过 document get element by ID 来读取， 通过HTML文件里去找拥有这个ID的 INPUT
        // 现在是 通过 event.target
        // event 意思：用户触发的这个动作的信息
        //       有道理，EVENT是事件的意思，事件就是 发生的 事
        //    。target ： 从哪个HTML元素触发的
        // EG. 我点击 DELETE ALL BUTTON， = 触发 CLICK EVENT
        //       这个CLICK EVENT 的 TARGET 就是 DELETE ALL BUTTON
        // 然后
        //    想知道我UPDATE的这个东西的 ID 等于多少， 每个LI 元素都有个 ID
        //    根据ID 判断 元素更新的编号是第几个
        // get the ID attribute from updateItemInput's parent <li> element.
        const id = updateItemInput.parentNode.getAttribute("id");
        /// ？ 用 PARENTNODE ？
        /// 一整个ITEM 也包括 输入框，右边的叉叉，左边的打勾框
        /// UPDATEINPUT 只是 ITEM 的一部分，此ITEM还包括 上一行的3个东西
        /// PARENTNODE 才是 一整个东西， 它才有 GET ATTRIBUTE METHOD



        // 获取ID后，就知道要修改哪个 TODO ITEM 名字了
        const newName = updateItemInput.value;
        // 当前方程 为了处理 用户 按键盘的操作
        //   更新时按回车键 = 希望更新它；
        //   也可以按ESC 键 = 想撤销更新，返回原来的内容
            // 所以需要 判断 2 种按键情况：
        //if (event.keyCode === ENTER_KEY) //用户按了哪个键，也包含在了EVENT 里
        // event.target = 用户操作从哪个元素触发                  target =~ 来源地
        // keyCode = 用户按了哪个 键
        // 有很多种 EVENT：
        //   EVENT.TARGET 对于所有 类型EVENT 都有，不管是鼠标event, click event,
        //      or window change event, keyboard event, 都有 TARGET,都有发起的元素
        // 但是 keyCode 只有 KEYBOARD EVENT 才有， MOUSE EVENT 是没有的
        // 注意： 有些EVENT信息 只有某些 特殊类型EVENT 有
        // 还得检查输入不为空，当空的 你按了回车， 不会把空的存进来
        if (updateItemInput.value && event.keyCode === ENTER_KEY) { // STRING 不空 = 长度 > 0 ///或者直接 (NEWNAME) = 是否存在 = 是否 不空
            // 就可以 更新了：
            this.changeItemName(id, newName);
        } else if (event.keyCode === ESC_KEY) { //ESC = 返回上次 ？
            // 是个array ， 所以用 [] 来 access
            updateItemInput.value = model.items[id].name;/// 从哪获取上次的名字？ 从 “数据库” MODEL
            view.displayTodoItems();// 从修改状态变成不修改状态 /// 更新 UI
            // 从有输入框状态变成 无输入框状态
            // = 修改ITEM的展示方式 = 通过 VIEW displayTodoItems 去做刷新页面的过程
        }
    },



    /**
    * Update the name of the selected todo item
    * when the user clicks on anything
    * that lies outside the input box.  点击外面任何空白的部分
    * 除了按 ENTER 之外， 还可以按 白色的 其他位置 （来完成输入 ？对的
    *     来让 ITEM 名字 变成 我刚输入进去的
    * @param {Event} event - the event paramter that is available to event handlers
    */
    updateItemNameOnFocusOut: function(event) {
        // const updateItemInput = event.target;
        // const id = updateItemInput.parentNode.getAttribute("id");
        // const newName = updateItemInput.value;
        // /// 有输入 ， 按空白处 = 存好
        // /// 无输入空的， 按空白处 = 整个空白输入框 消失
        // if (typeof newName === 'string' && newName.length > 0) {
        //     this.changeItemName(id, newName);
        // } else {
        //     this.deleteItem(id); /// 此时先不CALL MODEL 里的DELETE
        // }
        const updateItemInput = event.target;
        // Get the id attribute from updateItemInput's parent <li> element.
        const id = updateItemInput.parentNode.getAttribute('id');
        // Get the input value that the user has entered.
        const newName = updateItemInput.value;
        if (typeof newName === 'string' && newName.length > 0) {
            this.changeItemName(id, newName);
        }
        else {
            this.deleteItem(id);
        }


    },



    /**
    * Change the name of the specified item.
    * @param {Number} index - the index of the item (index starts from zero)
    * @param {string} name - the item's new name
    */
    changeItemName: function(index, name) {
        model.changeItemName(index, name); /// 从控制器 操作 数据层
        view.displayTodoItems();
    },



    /**
    * Delete the specified item.
    * @param {Number} index - the index of the item (index starts from zero)
    */
    deleteItem: function(index) {
        model.deleteItem(index);
        view.displayTodoItems(); /// 更新 UI
    },



    /**
    * Delete all items.
    */
    deleteAllItems: function() {
        /// 当按 删除全部 时， 会出现一个提示： 你确定要删除全部吗？
        const confirmDelete = confirm("This will delete all todo items!");
        /// 如果用户点击OK， 则 TRUE
        /// 如果用户点击CANCEL, 则 FALSE
        if (confirmDelete === true) {
            model.deleteAllItems();
            view.displayTodoItems();
        }
    },


/// 第一轮 DEBUG 这里 似乎有问题， 我点击下面列的文本框， 没有 允许我修改,
/// 笑死， 原来是我 ID 的 UPDATE 写成了 UPATDE 写错了！！
    /** 我点击了 ITEM， 会有个 文本框 出来， 让用户去修改 ITEM 的名字
    * Turn on the updating mode.  ？ 待更新 模式 ？
    * Display the update input and hide the todo item label.
    * @param {Event} event - the event paramter that is available to event handlers
    */
    turnOnUpdatingMode: function(event) { /// 隐藏 LABEL，展示 INPUT
        /// 我点击 LABEL 来开启， LABEL 指 那行字符在普通状态下的样子吧
        const itemLabel = event.target;
        const updateItemInput = itemLable.parentNode.querySelector(".update-item-input");/// 啥啊这？
        /// 不能用 DOCUMENT. querySelector, 因为里面有太多元素满足 此条件： ".upadte-item-input"
        /// 在 itemLable.parentNode.querySelector(".upadte-item-input") 这个范围内做选择 去选择个 class 为
        ///         .upadte-item-input 的元素
        view.hideDOMElement(itemLabel); /// 为什么是这个 METHOD ？
        view.displayDOMElement(updateItemInput);
        updateItemInput.focus();
    },



    /**
    * Read the index of the selected item from the UI.
    * Toggle the status of the selected item.
    * If it is done, change it to undone.
    * If it is undone, change it to done.
    * @param {Event} event - the event paramter that is available to event handlers
    */
    toggleItem: function(event) {
        const toggleItemCheckbox = event.target;
        const id = toggleItemCheckbox.parentNode.getAttribute("id");
        model.toggleItem(id);
        view.displayTodoItems();
    },



    /**
    * Toggle the status of all items.
    * If an item is done, change it to undone.
    * If an item is undone, change it to done.
    */
    toggleAllItems: function() {
        model.toggleAllItems(); /// 控制器 控制 MODEL 来干活
        view.displayTodoItems();
    },



    /** 最上面那个输入框 叫 表单 哦。 按了它右边的 X， 它就没了
    * Clear the input form that is used to add new items.
    */
    clearForm: function() {
        const createItemInput = document.getElementById("create-item-input");/// 此ID 在HTML 38行
        /// 先获取一个： 在横线输入东西 的元素
        createItemInput.value = createItemInput.getAttribute("placeholder");
        /// 也不是不可以设置为 空STRING， 只是咱有个占位符： Add a new item (HTML 39行）（来指示用户
        /// Attribute 指啥来着？
        const createItemForm = document.getElementById("create-item-form"); /// 读取 create-item-form 元素
        createItemForm.reset(); /// RESET, 变成 初始状态
    },
};
/// Controller 里 有 event 作为参数的 method 都是 event-handler
/// 跟 HTML 元素绑定， ONCLICK 啥的绑定起来





/** 用户不直接跟 VIEW 打交道， 用户跟 CONTROLLER 打交道
 * VIEW 的东西 不直接修改 MODEL 里的 东西
 * VIEW 只跟展示有关， 不修改 储存了什么
 *   那就是 笔记里的图喽
* View contains methods that are responsible for displaying only but
* do not handle events (e.g. displayTodoItems).
* View also contains DOM manipulation methods where we can
* modified the appearance of UI elements and/or
* attach event listeners to them.
*/
const view = {
    /**
    * Render all todo items on the webpage.
    * This method is long and complex.
    * I have broken down the method into several smaller steps.
    * See the comments below.
    */ // 负责 整个 TODO LIST UI 的更新， 但是能拆分成好几个小任务
    displayTodoItems: function() {  // toggle all : 切换所有.
        // 一开始没有 任何 ITEM， 所以不显示 TOGGLE ALL 按钮 （T A啥意思？ 全勾选？
        /**
        * If there is at least one item, 没有 ITEM 时， 不需要展示
        * then display a button that is used to toggle the status of all items.
        * Otherwise, do not display.
        *
        * For each todo item, we should do the following:
        * //针对每一个 TODO ITEM， 都要做：
        *
        * 1️⃣
        * Render a checkbox on the left. 有个 CHECKBOX
        * If the item is done, the checkbox should be checked. 已完成 =》 打个勾
        * Otherwise, the checkbox should be empty; 盒子长什么样CSS写了，JAS 只要把CSSS CLASS
        * 的名字用上就好
        *
        * 2️⃣ 是否展示 INPUT
        * Add an input box in order to edit the item's name.
        * Initially the input box should be invisible. 输入框初始 = 隐藏的
        * / 咱点击了，才会 INPUT 显示出来
        * It becomes visible only when the user clicks on the item's name.
        *
        * 3️⃣ LABEL HTML 元素， ITEM 已完成 = 用淡颜色和线划过去
        * Display the item's name. 展示 ITEM 名字
        * For a done item, its name should be displayed as stricken-through.
        * 样式已在CSS, APPLY 或者 拿掉
        *
        * 4️⃣ ITEM 最右边有个 DELETE BUTTON
        * / DELETE 是要处理EVENT 的， 处理用户输入的东西
        * 所以要记得 attach appropriate event-listener (?这啥玩意) 记得要绑定 用户操作响应
        * Display a delete button on the right. 反馈： 把 用户点击的 删除掉
        * Remember to attach appropriate event listener(s) to the button.
        */
        const todoListUl = document.querySelector("ul");
        todoListUl.innerHTML = "";
        //const todoListUl = document.querySelector("ul"); /// 这啥来着 ？
        //todoListUl.innerHTML = ""; /// 隐藏 BULLET POINT
        model.items.forEach(function(item, index) {
            const itemLi = document.createElement("li");
            itemLi.id = index;
            /// 步骤 1：
            const toggleItemCheckbox = document.createElement("input");
            toggleItemCheckbox.type = 'checkbox';
            toggleItemCheckbox.classList.add("toggle-item-checkbox"); /// 用 CSS 定义的 外貌
            toggleItemCheckbox.addEventListener('change', controller.toggleItem); /// 打勾格 叫做 change-event： T 变 F， F 变 T
            /// 咱这不是 CLICK-EVENT, 是 CHANGE-EVENT /// 谁是 咱的 EVENT-LISTENER : 是 controller 里面的 toggleItem
            /// 每个类型为 checkbox 的元素都自带一个 ‘受否打勾了’ 的 Attribute： checked = TRUE or FALSE
            if (item.done) { /// item === TRUE
                toggleItemCheckbox.checked = true; ///你对 我对
            } else {
                toggleItemCheckbox.checked = false; ///你错 我错
            }
            /// toggleItemCheckbox.checked = item.done; 可简写为这样 直接我等于你 就行了
            /// 步骤 2：
            const updateItemInput = document.createElement("input");
            updateItemInput.classList.add("update-item-input", "hide");
            updateItemInput.type = "text";
            updateItemInput.value = item.name;
            // updateItemInput.addEventListener("keyup", controller.updateItemNameOnKeyUp);/// 不能 直接传 因为updateItemNameOnKeyUp 里面用了 this,
            /// 而 618行的 controller.toggleItem 能直接传，因为没用 this
            // updateItemInput.addEventListener("focusout", controller.updateItemNameOnFocusOut);/// 不能 直接传
            /// 为什么有 this 就不能 直接传？ 原因：
            /// 咱不知道用户什么时候 触发 EVENT
            /// 等用户触发EVENT了，咱已经不知道 THIS 是什么了 （Z： ？ 真的？
             /// THIS 是指 每个 CLASS 的 FIELDS 吧 （Z： 来自 210 JAVA 知识
            /// 总结：
            /// 核心问题： execision context 会记录 谁是 THIS，     (一句话概括：防止 EXECUSION CONTEXT 的 丢失)*********************************
            ///          但等到用户按点击 可能过去很久了，置信CONTEXT 已经消失/不存在
            ///                                                           = 没记录谁是 THIS
            ///                                 = 当进入EVENT-LISTENER BODY 内部时，无法获取正确的 THIS 的值 = 出问题
            /// 解决方案： 用 bind(controller) 来搞定 execusion 的 保存问题
            /// 把此函数 跟 CONTROLLER 绑定起来，不管此函数什么时候被CALL， 我都让它的 THIS 为 CONTROLLER， 我会保存它的 execusion context
            updateItemInput.addEventListener("keyup", controller.updateItemNameOnKeyUp.bind(controller));
            updateItemInput.addEventListener("focusout", controller.updateItemNameOnFocusOut.bind(controller));
            ///              防止 execusion context 的 丢失
            /// 等会 EVENT-LISTENER 被CALL 时，进入 METHOD 的内部，遇到 THIS, 就会明白 THIS 指 CONTROLLER
            /// 刚刚上面的 618行 controller.toggleItem 没用 THIS， 所以不用 BIND（），不用担心 execusion context 保存的问题
            /// 未来：REACT 框架 会 大量 "防止 EXECUSION CONTEXT 的 丢失" 的操作
            /// 步骤 3：
            const itemLabel = document.createElement("label");
            itemLabel.addEventListener("click", controller.turnOnUpdatingMode);/// 要 （ ） 吗？
            itemLabel.textContent = item.name;
            itemLabel.classList.add("item-label");
            /// 步骤 4：
            const deleteItemButton = document.createElement("button");
            deleteItemButton.textContent = "x";
            deleteItemButton.className = "x-button";
            deleteItemButton.addEventListener("click", (event) => (controller.deleteItem(index)));/// index 是 610行的 INDEX
            if (item.done) { /// 已完成
                /// 划去             CSS 咱自己定义的 item-strikethrough
                itemLabel.classList.add("item-strikethrough"); /// 删除线，加删除线
            } else {
                itemLabel.classList.remove("item-strikethrough");
            }


            itemLi.appendChild(toggleItemCheckbox); /// 刚新建了 4个，所以要粘上来 4个
            itemLi.appendChild(itemLabel);
            itemLi.appendChild(updateItemInput);
            // itemLi.appendChild(itemLabel); 不是按上面几段的顺序来写吗？
            itemLi.appendChild(deleteItemButton);
            todoListUl.insertBefore(itemLi, todoListUl.childNodes[0]);
            /// 上面几段 新建了很多东西，但暂时还未放到 HTML 上，所以目前还不会显示上去
            /// todoListUl 是刚刚获取的 UL
            /// todoListUl.childNodes[0] 是指 第一个
            /// 人话： 咱把 itemLi 加到 第一个的前面


        }); /// 这个 FOR LOOP 非常长






        ///*********************************************************************************************** */
        /// 下面这 2段 与上面的 FOR LOOP 谁先谁后 无关系，  因为下面 2段 是关于 展示 左边总体打勾BOX 与 右边 添加+ 的
        /// 展示 左上的 总体打勾CHECKBOX(Z:这东西使下面任务列 少数服从多数)
        const toggleAllItemsButton = document.querySelector("#toggle-all-items-button"); /// 用 getElementByID 似乎也行
        /// querySelector 都得用 # 号
        if (model.countItems().numItems > 0) {
            view.displayDOMElement(toggleAllItemsButton);
        } else { ///  <= 0
            view.hideDOMElement(toggleAllItemsButton); /// 无元素 = 总体勾BOX 隐藏
        }

        /// 用户在最上面的框输入东西 我希望右边会出现个加号，让我把输入的东西 加进去
        /// 单独写个 HELPER METHOD 更好
        /// 未来的改进方向： 把此 DISPLAY METHOD 拆分成 多个 HELPER METHOD**********************************************************
        const createItemButton = document.querySelector('#create-item-button'); /// 这个 + 按键
        const createItemInput = document.getElementById('create-item-input');/// 获取用户的 输入
        /// 这里咱 展示了 2 种获取方法： querySelector 与 getElementById
        if (createItemInput.value) { /// 有输入，就展示 + 按键
            this.displayDOMElement(createItemButton);
        } else {                     /// 用户没输入 不展示 + 按键
            this.hideDOMElement(createItemButton);// this  = View 自己 是吧
        }
    },  /* 对于每个ITEM 都要做这些， 所以要用到 ITERATION，会有 LOOP */



    /**
    * Display a DOM element. 展示
    * @param {HTMLElement} domElement - the DOM element that you want to display
    */
    displayDOMElement: function(domElement) {
        /// 隐藏一个 HTML 元素 （via CSS 的 RULE?
        /// CSS 有个 .hide class 60行
        /* .hide {
                  display: none !important;
                  } */
                  /// 想隐藏， 那就给个 class = hide  (class="hide"
                  /// 不想隐藏， 那就把 class="hide" 拿掉就行
        domElement.classList.remove("hide"); /// 这就处于 全显示 的状态
        /// domElement 是个 HTML 元素，可以访问它所有的 CLASS NAME， 然后 移除 “隐藏”
        /// 想让它隐藏：
        /// domElement.classList.add("hide");

    },



    /**
    * Hide a DOM element. 隐藏
    * @param {HTMLElement} domElement - the DOM element that you want to hide
    */
    hideDOMElement: function(domElement) {
        /// 想让它隐藏：
        domElement.classList.add("hide");

    }
};


/* 要CALL 的， 因为上面写的那些都只是 IMPLEMENTATION, 还未CALL */
view.displayTodoItems(); /* 现只需CALL 一个， CONTROLLER 里的不要需要CALL,
因为 HTML 已经绑定 ONCLICK, 当 CLICK 发生之后， 才会被 CALL
所以咱暂时只是展示页面是吗？
有人点击了 才会 做出反馈 进行 更新展示的东西 */


/// DEBUG 1: 下面ITEM 列 点击 应该允许修改，但这里无反应 不允许修改
/// DEBUG 2: 按 ENTER 键 应该保存用户的输入， 但这里 把用户的输入删除了

/// DEBUG 3: 按 ESC 键 应该 。。。。？