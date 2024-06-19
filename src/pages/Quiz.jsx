/* eslint-disable react/prop-types */
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

const Answer = ({ value, isChoose, handleChange }) => {
  return (
    <Box
      cursor="pointer"
      w="full"
      p="4"
      bgColor={!isChoose ? "green.300" : "green.800"}
      borderRadius="10px"
      color="white"
      _hover={{
        bgColor: "green.600",
      }}
      onClick={() => handleChange()}
    >
      {value}
    </Box>
  );
};

const Quiz = () => {
  const [result, setResult] = useState(null);
  const [choices, setChoices] = useState([]);
  const quizData = [
    {
      id: 1,
      question: "What is ReactJS?",
      answers: [
        "A JavaScript library for building user interfaces",
        "A programming language",
        "A database management system",
      ],
      correctAnswer: "A JavaScript library for building user interfaces",
    },
    {
      id: 2,
      question: "What is JSX?",
      answers: [
        "A programming language",
        "A file format",
        "A syntax extension for JavaScript",
      ],
      correctAnswer: "A syntax extension for JavaScript",
    },
  ];
  const handleChange = (questionID, questionChoice) => {
    const newData = [...choices];
    const c = newData.find((item) => item.questionID === questionID);
    if (c) {
      c.questionChoice = questionChoice;
      setChoices(newData);
    } else {
      setChoices([...choices, { questionID, questionChoice }]);
    }
  };

  const handleSubmit = () => {
    let correctAnswer = 0;

    choices.forEach((c) => {
      const correctChoice = quizData.find(
        (item) => item.id === c.questionID
      ).correctAnswer;
      if (correctChoice === c.questionChoice) {
        correctAnswer++;
      }
    });
    setResult(correctAnswer);
  };

  return (
    <VStack gap="4" w="full">
      {quizData.map((quiz) => {
        return (
          <Box key={quiz.question} w="full">
            <Text fontSize="1.5rem" fontWeight="bold">
              {quiz.id}. {quiz.question}
            </Text>
            <VStack w="full" gap="4">
              {quiz.answers.map((ans) => {
                return (
                  <Answer
                    value={ans}
                    key={ans}
                    isChoose={choices.some(
                      (c) =>
                        c.questionID === quiz.id && c.questionChoice === ans
                    )}
                    handleChange={() => handleChange(quiz.id, ans)}
                  />
                );
              })}
            </VStack>
          </Box>
        );
      })}
      <Button
        isDisabled={choices.length !== quizData.length}
        colorScheme="red"
        onClick={handleSubmit}
      >
        Submit
      </Button>
      <Text color="green.500" fontSize="1.2rem">
        Số câu đúng: {!result ? "Chưa nộp" : `${result}/${quizData.length}`}
      </Text>
    </VStack>
  );
};

export default Quiz;
