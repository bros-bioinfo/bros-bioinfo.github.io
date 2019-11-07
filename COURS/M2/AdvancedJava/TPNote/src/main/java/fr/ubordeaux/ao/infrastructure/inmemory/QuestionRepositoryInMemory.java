package fr.ubordeaux.ao.infrastructure.inmemory;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Random;
import java.util.Set;

import fr.ubordeaux.ao.domain.exception.QuestionExamException;
import fr.ubordeaux.ao.domain.model.Question;
import fr.ubordeaux.ao.domain.model.QuestionRepository;
import fr.ubordeaux.ao.domain.model.Questionnary;

public class QuestionRepositoryInMemory implements QuestionRepository {
    private Set<Question> questionSet;
    private int questionnaryId;

    public QuestionRepositoryInMemory() {
        this.questionSet = new HashSet<Question>();
        questionnaryId = 0;
    }

    public void addQuestion(Question question) {
        //this.addQuestion(question);
        questionSet.add(question);
    }

    public Questionnary createRandomQuestionnary(int numberOfQuestion) {
        if (numberOfQuestion > questionSet.size()) throw new QuestionExamException("Not enough questions saved");
        Set<Question> questionnayQuestionSet = new HashSet<Question>();
        List<Question> sample = new ArrayList<Question>(questionSet);
        Collections.shuffle(sample);
        for (int i = 0; i < numberOfQuestion; i++) {
            questionnayQuestionSet.add(sample.get(i));
        }
        String id = "#" + questionnaryId++;
        return new Questionnary(id, questionnayQuestionSet);
    }

}