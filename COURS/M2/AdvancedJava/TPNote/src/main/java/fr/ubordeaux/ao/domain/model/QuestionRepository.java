package fr.ubordeaux.ao.domain.model;

import fr.ubordeaux.ao.domain.exception.QuestionExamException;
import java.util.Objects;
import java.util.Set;

public interface QuestionRepository {
    public void addQuestion(Question question);
    public Questionnary createRandomQuestionnary(int numberOfQuestion);
}
