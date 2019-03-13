window._find = function (selector) {
   
}

Element.prototype._each = function (callback) {

};

Element.prototype._on = function (event, callback) {
    this.addEventListener(event, callback);
    return this;
};

Element.prototype._find = function (selector) {
    return this.querySelector(selector);
};

Element.prototype._attr = function (attrName, attrValue) {
    if (attrValue != null) {
        this.setAttribute(attrName, attrValue);
    } else if (attrValue === null) {
        this.removeAttribute(attrName);
    } else {
        return this.getAttribute(attrName);
    }
    return this;
};

Element.prototype._html = function (html) {
    if (typeof html == 'string') {
        this.innerHTML = html;
        return this;
    } else {
        return this.innerHTML;
    }
};

Element.prototype._text = function (text, withSpaces) {
    var withSpaces = false || withSpaces;

    if (typeof text == 'string') {
        if (withSpaces) {
            this.textContent = text;
        } else {
            this.innerText = text;
        }
        return this;
    } else {
        return withSpaces ? this.textContent : this.innerText;
    }
};

Element.prototype._addClass = function (className) {
    this.classList.add(className);
    return this;
};

Element.prototype._toggleClass = function (className) {
    this.classList.toggle(className);
    return this;
};

Element.prototype._removeClass = function (className) {
    this.classList.remove(className);

    return this;
};

Element.prototype._hasClass = function (className) {
    return this.classList.contains(className);
};
