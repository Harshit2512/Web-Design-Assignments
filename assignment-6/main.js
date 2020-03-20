let body = document.getElementsByTagName('body').item(0);

let toolbardiv = document.createElement('div');
toolbardiv.className = "toolbardiv";
body.appendChild(toolbardiv);

let toolbardivone = document.createElement('div');

// For creating Bold Button : Starts
var buttonElement = document.createElement("BUTTON");
var buttonText = document.createTextNode("B");
buttonElement.appendChild(buttonText);
toolbardivone.appendChild(buttonElement);
buttonElement.className = "embolden";
toolbardivone.className = "toolbardivone";
toolbardiv.appendChild(toolbardivone);
// For creating Bold Button : Ends

// For creating Italic Button : Starts
let toolbardivtwo = document.createElement('div');
var italicButtonElement = document.createElement("BUTTON");
var italicButtonText = document.createTextNode("I");
italicButtonElement.appendChild(italicButtonText);
toolbardivtwo.appendChild(italicButtonElement);
italicButtonElement.className = "italic";
toolbardivtwo.className = "toolbardivtwo";
toolbardiv.appendChild(toolbardivtwo);
// For creating Italic Button : Ends

// For creating Underline Button : Starts
let toolbardivthree = document.createElement('div');
var underlineButtonElement = document.createElement("BUTTON");
var underlineButtonText = document.createTextNode("U");
underlineButtonElement.appendChild(underlineButtonText);
toolbardivthree.appendChild(underlineButtonElement);
underlineButtonElement.className = "underline";
toolbardivthree.className = "toolbardivthree";
toolbardiv.appendChild(toolbardivthree);

// For creating Left Align Button : Starts
let toolbardivfour = document.createElement('div');
var buttonElementRa = document.createElement("BUTTON");
var buttonTextRa = document.createTextNode("AL");
buttonElementRa.appendChild(buttonTextRa);
toolbardivfour.appendChild(buttonElementRa);
buttonElementRa.className = "alignLeft";
toolbardivfour.className = "toolbardivfour";
toolbardiv.appendChild(toolbardivfour);
// For creating Left Align Button : Ends

// For creating Right Align Button : Starts
let toolbardivfive = document.createElement('div');
var buttonElementLa = document.createElement("BUTTON");
var buttonTextLa = document.createTextNode("AR");
buttonElementLa.appendChild(buttonTextLa);
toolbardivfive.appendChild(buttonElementLa);
buttonElementLa.className = "alignRight";
toolbardivfive.className = "toolbardivfive";
toolbardiv.appendChild(toolbardivfive);
// For creating Right Align Button : Ends

// For creating Centre Align Button : Starts
let toolbardivsix = document.createElement('div');
var buttonElementCa = document.createElement("BUTTON");
var buttonTextCa = document.createTextNode("J");
buttonElementCa.appendChild(buttonTextCa);
toolbardivsix.appendChild(buttonElementCa);
buttonElementCa.className = "alignCenter";
toolbardivsix.className = "toolbardivsix";
toolbardiv.appendChild(toolbardivsix);
// For creating Centre Align Button : Ends

let editordiv = document.createElement('div');
editordiv.className = "editordiv";
editordiv.id = "editor";
editordiv.contentEditable = "true";
editordiv.innerHTML = "This assignmnet is to implement functionality of Bold, Italic, Underline, Justify.";
body.appendChild(editordiv);

let boldListner = function(event){
    
    var x = document.querySelector(".bold-text");

    var highlight = window.getSelection();
    var selectedText = highlight.toString();
    if(x!==null){
        //console.log(x.textContent);
        if(x.textContent.match(selectedText)){
            // Unbold
            

            var parentEl = null, sel;
        if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            //sel.focusNode.parentElement.className
            parentEl = sel.getRangeAt(0).commonAncestorContainer;
            if (parentEl.nodeType != 1) {

                parentEl = parentEl.parentNode;
                
                var classApplied = parentEl.className;
            }
        }
    } else if ( (sel = document.selection) && sel.type != "Control") {
        parentEl = sel.createRange().parentElement();
    }
        // To remove effect by removing class
        parentEl.className = ""; 
        //parentEl.className = "bold-text"; 
        //parentEl.className = "";
        //parentEl.className = classApplied;
                    
        }else{
            // make bold
        var span = document.createElement('SPAN');
        span.textContent = selectedText;
        var range = highlight.getRangeAt(0);
        range.deleteContents();
        range.insertNode(span);
        span.className = "bold-text";
        }
    }else{
        //console.log(selectedText);
        var span = document.createElement('SPAN');
        span.textContent = selectedText;
        var range = highlight.getRangeAt(0);
        range.deleteContents();
        range.insertNode(span);
        span.className = "bold-text";
    }
    
    
    
    
    
}

let italicListner = function(event){
    
    ///-----------------------------------------------------
   
    var ix = document.querySelector(".italic-text");

    var highlight = window.getSelection();
    var selectedText = highlight.toString();
    if(ix!==null){
        //console.log(x.textContent);
        if(ix.textContent.match(selectedText)){
            // Unbold
            

            var parentEl = null, sel;
        if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            parentEl = sel.getRangeAt(0).commonAncestorContainer;
            if (parentEl.nodeType != 1) {
                parentEl = parentEl.parentNode;
            }
        }
    } else if ( (sel = document.selection) && sel.type != "Control") {
        parentEl = sel.createRange().parentElement();
    }
        // To remove effect by removing class
        parentEl.className = ""; 
                    
        }else{
            // make bold
        var span = document.createElement('SPAN');
        span.textContent = selectedText;
        var range = highlight.getRangeAt(0);
        range.deleteContents();
        range.insertNode(span);
        span.className = "italic-text";
        }
    }else{
        //console.log(selectedText);
        var span = document.createElement('SPAN');
        span.textContent = selectedText;
        var range = highlight.getRangeAt(0);
        range.deleteContents();
        range.insertNode(span);
        span.className = "italic-text";
    }
    
}


let underlineListner = function(event){

    //--------------------------------

    var ux = document.querySelector(".underline-text");

    var highlight = window.getSelection();
    var selectedText = highlight.toString();
    if(ux!==null){
        //console.log(x.textContent);
        if(ux.textContent.match(selectedText)){
            // Unbold
            
            var parentEl = null, sel;
        if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            parentEl = sel.getRangeAt(0).commonAncestorContainer;
            if (parentEl.nodeType != 1) {
                parentEl = parentEl.parentNode;
            }
        }
    } else if ( (sel = document.selection) && sel.type != "Control") {
        parentEl = sel.createRange().parentElement();
    }
        // To remove effect by removing class
        parentEl.className = ""; 
                    
        }else{
            // make bold
        var span = document.createElement('SPAN');
        span.textContent = selectedText;
        var range = highlight.getRangeAt(0);
        range.deleteContents();
        range.insertNode(span);
        span.className = "underline-text";
        }
    }else{
        //console.log(selectedText);
        var span = document.createElement('SPAN');
        span.textContent = selectedText;
        var range = highlight.getRangeAt(0);
        range.deleteContents();
        range.insertNode(span);
        span.className = "underline-text";
    }
    
}


let alignRightListner = function(event){

   //var elements = document.getElementById('editor').style.textAlign = "right";

  // var x = document.getElementsById('editor').getAttribute("style"); 
   //var element = document.getElementById("editor");
    //var out = "";
    //var elementStyle = element.style.cssText;
   // var computedStyle = window.getComputedStyle(element, null);
    editor.className = "align-right";

    //if(elementStyle == "text-align: right;"){}
  
}

let alignLeftListner = function(event){

    //var elements = document.getElementById('editor').style.textAlign = "left";
    //var elements = document.getElementById('editor');
    editor.className = "align-left";
   
 }

 let justifyListner = function(event){

    //var elements = document.getElementById('editor').style.textAlign = "Justify";
    editor.className = "align-justify";
   
 }

buttonElement.addEventListener('click', boldListner);
italicButtonElement.addEventListener('click', italicListner);
underlineButtonElement.addEventListener('click', underlineListner);
buttonElementRa.addEventListener('click', alignLeftListner);
buttonElementLa.addEventListener('click', alignRightListner);
buttonElementCa.addEventListener('click', justifyListner);

