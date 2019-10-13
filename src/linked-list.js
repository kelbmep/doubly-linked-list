const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
    }

    append(data) {
        if (this.length == 0) {
            let a = new Node(data);
            this._head = a;
            this._tail = a;
        }
        else {
            let a = new Node(data, this._tail);
            this._tail.next = a;
            this._tail = a;
        }
        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let a = this._head;
        for (let i = 0; i < index; i++)
            a = a.next;
        return a.data;
    }

    insertAt(index, data) {
        if(this.length == 0)
            return this.append(data);
        if(index == 0)
        {
            let a = new Node(data, null, this._head);
            this._head.prev = a;
            this._head = a;
            this.length++;
            return this;
        }
        let a = this._head;
        for (let i = 0; i < index; i++)
            a = a.next;
        let t = new Node(data, a.prev, a);
        a.prev.next = t;
        a.prev = t;
        this.length++;
        return this;
    }

    isEmpty() {
        return !Boolean(this.length);
    }

    clear() {
        if(!this.isEmpty()) 
        {
            let a = this._head;
            for (let index = 0; index < this.length; index++) {
                a.data = null;
                a = a.next;
            }
            this.length = 0;
        }
        return this;
    }

    deleteAt(index) {
        if(index == 0 && this._head.next != null)
        {
            let a = this._head;
            a = a.next;
            this._head = a;
            this.length--;
            return this;
        }
        if(index == this.length - 1)
        {
            let a = this._tail;
            a = a.prev;
            this._tail = a;
            this.length--;
            return this;
        }
        let a = this._head;
        for (let i = 0; i < index; i++)
            a = a.next;
        a.prev.next = a.next;
        a.next.prev = a.prev;
        this.length--;
        return this;
    }

    reverse() {
        let h = this._head;
        let t = this._tail;
        for (let index = 0; index < Math.floor(this.length / 2); index++) {
            [h.data, t.data] = [t.data, h.data];
            h = h.next;
            t = t.prev;
        }
        return this;
    }

    indexOf(data) {
        let a = this._head;
        let equal = 0;
        for (let index = 0; index < this.length; index++) {
            if(a.data == data)
                return equal;
            a = a.next;
            equal++;
        }
        return -1;
    }
}

module.exports = LinkedList;
