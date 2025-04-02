import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const questions = [
  {
    question: "Дурангийн оношилгоо ямар эрхтнийг шинжилдэг вэ?",
    options: ["Зүрх", "Уушиг", "Ходоод", "Тархинд"],
    answer: "Ходоод",
  },
  {
    question: "MRI ямар төрлийн дүрслэл гаргадаг вэ?",
    options: ["Рентген", "Соронзон", "Дууны", "Гэрлийн"],
    answer: "Соронзон",
  },
  {
    question: "ЭХО ямар давтамжийн долгион ашигладаг вэ?",
    options: ["Соронзон", "Хэт авиан", "Дууны", "Рентген"],
    answer: "Хэт авиан",
  },
  {
    question: "Цөмийн оношилгоо ямар бодис ашигладаг вэ?",
    options: ["Радио идэвхт изотоп", "Рентген", "Хэт авиан", "Соронзон"],
    answer: "Радио идэвхт изотоп",
  },
  {
    question: "MRI-д ямар төрлийн соронзон орон ашигладаг вэ?",
    options: ["Бага давтамжтай", "Өндөр давтамжтай", "Тогтмол", "Өөрчлөгддөг"],
    answer: "Тогтмол",
  },
  {
    question: "ЭХО-г ихэвчлэн ямар төрлийн оношилгоонд ашигладаг вэ?",
    options: ["Цусны шинжилгээ", "Элэгний сорил", "Жирэмсний хяналт", "Рентген"],
    answer: "Жирэмсний хяналт",
  },
  {
    question: "Цөмийн оношилгооны хамгийн түгээмэл хэрэглээ юу вэ?",
    options: ["Судсан дахь бөглөрлийг илрүүлэх", "Ходоодны шарх оношлох", "Булчингийн үйл ажиллагааг судлах", "Ясны бодисын солилцоог шинжлэх"],
    answer: "Ясны бодисын солилцоог шинжлэх",
  }
];

export default function MedicalQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-2xl font-bold mb-4">Эмнэлгийн Оношилгооны Quiz</h1>
      <Card className="w-96 text-center p-5">
        <CardContent>
          {showScore ? (
            <div>
              <h2 className="text-xl font-bold">Таны оноо: {score} / {questions.length}</h2>
              <Button className="mt-4" onClick={() => { setCurrentQuestion(0); setScore(0); setShowScore(false); }}>Дахин эхлэх</Button>
            </div>
          ) : (
            <div>
              <h2 className="text-lg font-semibold">{questions[currentQuestion].question}</h2>
              <div className="flex flex-col gap-2 mt-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button key={index} onClick={() => handleAnswerClick(option)}>{option}</Button>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
