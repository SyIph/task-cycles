/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    var c = 0;
    for (; start <= end; start++) {
        if (start % 2 == 0) c += start;
    }
    return c;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    var c = 0;
    while (a > 0.1) {
        c++;
        a = a / 2.0;
    }
    return c;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    for (var i = 2; i < message.length; i += 3) {
        message = message.substr(0, i) + '_' + message.substr(i + 1);
    }
    return message;
}
