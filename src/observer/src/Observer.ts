/* eslint-disable @typescript-eslint/no-explicit-any */
// より高度な型定義
type ObserverFunction<T = any> = (data: T) => void;
type UnsubscribeFunction = () => void;

class Observable<T = any> {
  private observers: Set<ObserverFunction<T>> = new Set();

  subscribe(f: ObserverFunction<T>): UnsubscribeFunction {
    this.observers.add(f);

    // アンサブスクライブ関数を返す
    return () => {
      this.unsubscribe(f);
    };
  }

  unsubscribe(f: ObserverFunction<T>): void {
    this.observers.delete(f);
  }

  notify(data: T): void {
    this.observers.forEach((observer) => {
      try {
        observer(data);
      } catch (error) {
        console.error("Observer error:", error);
      }
    });
  }

  // 全てのオブザーバーを削除
  clear(): void {
    this.observers.clear();
  }

  // オブザーバーの数を取得
  get observerCount(): number {
    return this.observers.size;
  }
}

export default Observable;
