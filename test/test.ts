class Test {
    Test1<T>(): void {
        console.log('asd1');
    }

    Test2(): void {
        console.log('asd2');
    }

    static Test3(): void {
        console.log('asd3');
    }
}


(new Test()).Test1<void>();
