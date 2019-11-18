package fr.ubordeaux.ao.domain.model;

import static org.junit.Assert.*;

import java.awt.*;
import java.util.HashSet;
import java.util.Set;

import org.junit.Test;

import fr.ubordeaux.ao.domain.exception.QuestionExamException;
import fr.ubordeaux.ao.domain.model.Question;
import fr.ubordeaux.ao.domain.model.Questionnary;

public class QuestionnaryTest {


    @Test
    public void shouldComputeScore() {
        String question = "Qui a écrit: Design Patterns - Elements of Reusable Object-Oriented Software";
        String description = "Question de culture générale";
        String reponseA = "Erich Gamma ";
        String reponseB = "Richard Helm";
        String reponseC = "Ralph Johnson";
        String reponseD = "John Vlissides";
        String reponseE = "Eric Evans";

        Set<String> candidate = new HashSet<String>();
        candidate.add(reponseA);
        candidate.add(reponseB);
        candidate.add(reponseC);
        candidate.add(reponseD);
        candidate.add(reponseE);
        Set<String> trueAnswser = new HashSet<String>();
        trueAnswser.add(reponseA);
        trueAnswser.add(reponseB);
        trueAnswser.add(reponseC);
        trueAnswser.add(reponseD);

        Question question1 = new Question(question, description, candidate, trueAnswser);

        Set<Question> questionSet = new HashSet<Question>();
        questionSet.add(question1);

        Questionnary questionnary1 = new Questionnary("#1", questionSet);
        questionnary1.answer(question1, reponseA);
        questionnary1.answer(question1, reponseB);
        assertEquals(2, questionnary1.getScore());


        Questionnary questionnary2 = new Questionnary("#2", questionSet);
        questionnary2.answer(question1, reponseA);
        questionnary2.answer(question1, reponseB);
        questionnary2.answer(question1, reponseC);
        questionnary2.answer(question1, reponseD);
        assertEquals(4, questionnary2.getScore());

    }
}