function openWindow()
{var open=confirm("确认新建窗口打开网站吗？");
    if(open==true)
    // 新窗口打开时弹出确认框，是否打开
    {var url=prompt("通过输入对话框，确定打开的网址","http://www.imooc.com");
        if(url!=null)
        // 通过输入对话框，确定打开的网址，默认为 http：//www.imooc.com/
        {window.open(url,"_blank",'width=400px,height=500px,menubar=no,toolbar=no');
        }
        //打开的窗口要求，宽400像素，高500像素，无菜单栏、无工具栏。
        else
        {alert("再见！");}
    }
    else
    {alert("再见！");}
}