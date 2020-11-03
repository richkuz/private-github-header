window.onload=function(){
  // Decide if this is a private repo by looking for a Label with the text "Private"
  function isPrivateRepo() {
    var outlineLabels = document.querySelectorAll(
      "span.Label.Label--outline.v-align-middle"
    );
    for (const label of outlineLabels) {
      if (label.innerText == "Private") {
        return true;
      }
    }
    return false;
  }

  // Copy a formatted link to the GitHub issue
  function addCopyButton() {
    var element = document.createElement("input");
    element.type = 'button';
    element.value = 'Copy';
    element.style.marginRight="20px";
    element.onclick = function() {
      var title = document.getElementsByClassName('js-issue-title')[0].innerText;
      var href = window.location.href;
      var id = href.substr(href.lastIndexOf('/') + 1);

      var div = document.createElement('div');
      div.appendChild(document.createTextNode(title));
      var a = document.createElement('a');
      var linkText = document.createTextNode('#' + id);
      a.appendChild(linkText);
      a.href = href;
      div.appendChild(a);
      document.body.appendChild(div);

      const range = document.createRange();
      range.selectNode(div);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      const successful = document.execCommand('copy');
      document.body.removeChild(div);

    };
    document.getElementsByClassName('Header')[0].prepend(element);
  }

  if (isPrivateRepo()) {
    // Set the background color of the header to dark red and a line down the margin
    document.querySelectorAll("header")[0].style.backgroundColor = "darkRed";
    var div = document.createElement('div');
    div.style.width="10px";
    div.style.backgroundColor="darkRed";
    div.style.position = "fixed";
    div.style.top = "0";
    div.style.left = "0";
    div.style.bottom = "0";
    document.body.appendChild(div);
  }
  else {
    // Set the background color of the header to dark blue and a line down the margin
    document.querySelectorAll("header")[0].style.backgroundColor = "darkBlue";
    var div = document.createElement('div');
    div.style.width="10px";
    div.style.backgroundColor="darkBlue";
    div.style.position = "fixed";
    div.style.top = "0";
    div.style.left = "0";
    div.style.bottom = "0";
    document.body.appendChild(div);
  }

  addCopyButton();
}
