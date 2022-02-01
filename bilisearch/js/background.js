chrome.contextMenus.create({
        type:'normal',
        title:'使用bilibili搜索" %s "',
        contexts: ['selection'],
        visible: true,
        onclick: function(text)
        {
                chrome.tabs.create({url:'https://search.bilibili.com/all?keyword=' +
                text.selectionText})
        }
});