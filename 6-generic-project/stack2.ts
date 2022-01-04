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

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;

    constructor(private capacity: number) { }

    get size() {
      return this._size;
    }
    push(value: T) {
      if (this.size === this.capacity) {
        throw new Error('Stack is full!');
      }
      const node: StackNode<T> = { value, next: this.head };
      this.head = node;
      this._size++;
    }
    pop(): T {
      if (this.head == null) {
        throw new Error('Stack is Empty!');
      }
      const node: StackNode<T> = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl<string>(10);
  stack.push('Elle');
  stack.push('Bob');
  stack.push('steve 3');
  stack.push('54')
  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  //stack.pop();

  const stack2 = new StackImpl<number>(10);
  stack2.push(1);
  stack2.push(2);
  stack2.push(3);
  stack2.push(4)
  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }

  //stack2.pop();
}