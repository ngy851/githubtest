async function getDefinition() {
    const word = document.getElementById("word").value.trim();
    const definitionElement = document.getElementById("definition");

    if (word === "") {
        definitionElement.innerHTML = "Please enter a word.";
        return;
    }

    const dictionary = {
        pelvis: "Аарцаг: Нурууны доод хэсэгт байрлах, хөлөнд тулгуур болдог том нийлмэл ясны бүтэц.",
        heart: "Зүрх: Хүний биед цус шахах үүрэгтэй булчинлаг эрхтэн.",
        brain: "Тархи: Мэдрэлийн төв эрхтэн бөгөөд биеийн бүх үйл ажиллагааг зохицуулдаг.",
        lung: "Уушиг: Амьсгалах процессийг дэмждэг, хүчилтөрөгчийг цусанд дамжуулдаг эрхтэн.",
        kidney: "Бөөр: Шээс ялгаруулж, цусны хорыг шүүдэг эрхтэн.",
        liver: "Элэг: Биеийн хоргүйжүүлэх үүрэг гүйцэтгэх бөгөөд бодисын солилцоонд чухал үүрэгтэй эрхтэн.",
        stomach: "Ходоод: Хоол боловсруулж, шим тэжээлийг шингээх үүрэгтэй хөндий эрхтэн.",
        spine: "Нурууны яс: Биеийн тулгуур эрхтэн бөгөөд төв мэдрэлийн системийг хамгаалдаг.",
        muscle: "Булчин: Биеийн хөдөлгөөн хийхэд оролцдог уян хатан эд.",
        skin: "Арьс: Биеийн хамгийн том эрхтэн бөгөөд хамгаалалт, дулаан зохицуулалтын үүрэгтэй.",
        abdomin: "хэвлий",
        abdominal: "хэвлийн"
    
        
    };

    if (dictionary[word]) {
        definitionElement.innerHTML = `<strong>Definition:</strong> ${dictionary[word]}`;
        return;
    }


  

    try {
    
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.title === "No Definitions Found") {
            definitionElement.innerHTML = `No definition found for "${word}".`;
        } else {
            const meaning = data[0].meanings[0].definitions[0].definition;
            definitionElement.innerHTML = `<strong>Definition:</strong> ${meaning}`;
        }
    } catch (error) {
        definitionElement.innerHTML = "Error fetching the definition.";
        console.error("Error fetching the definition:", error);
    }
}
