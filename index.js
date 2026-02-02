function typeText(text, tick = 100) {
    let i = 0;
    const out = document.getElementById("output");

    const timer = setInterval(() => {
        out.textContent += text[i];
        i++;
        if (i >= text.length) {
            clearInterval(timer);
        }
    }, tick);
}

const s =
"Я не хочу видеть тебя одетой\n" +
"Сука, будто Рианна, ходит по моей постели(Чёрт)\n" +
"Новая коллекция, я флекшу так, как мы одеты\n" +
"Мы на неделе моды только каждую неделю\n" +
"424, смотри, сука, мой наконечник\n" +
"Ебало в билбордах и надпись, а: «Они не могут так флексить»\n";

typeText(s, 70);
