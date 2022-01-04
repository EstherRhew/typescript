{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  }

  class Container<T> implements Stack<T> {
    private _size: number = 0;
    get size() {
      return this._size;
    }

    private head?: StackNode<T>;

    push(value: T): void {
      const node: StackNode<T> = { value, next: this.head }
      this.head = node;
      this._size++;
    }

    pop(): T {
      if (this.head == null) {
        throw new Error('Stack is Empty!')
      }
      const node = this.head;
      this.head = node.next;
      return node.value;
    }

  }

  const container1 = new Container();
  container1.push('bob');
  container1.push(123);
  container1.push('ellie')
  container1.push(true);
  while (container1.size !== 0) {
    console.log(container1.pop());
  }
}