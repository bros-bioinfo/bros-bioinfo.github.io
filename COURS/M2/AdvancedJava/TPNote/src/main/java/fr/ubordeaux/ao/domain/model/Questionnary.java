package fr.ubordeaux.ao.domain.model;

import fr.ubordeaux.ao.domain.exception.QuestionExamException;

import java.util.Map;
import java.util.Map.Entry;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

public class Questionnary {
    private String id;
    private Set<Question> questionSet;
    private Map<Question, Set<String>> answerMap;

    public Questionnary(String id, Set<Question> questionSet) {
        this.setId(id);
        this.setQuestionSet(questionSet);
        answerMap = new HashMap<Question, Set<String>>();
    }

    public String getId() {
        return id;
    }

    public Set<Question> getQuestionSet() {
        return this.questionSet;
    }

    public int getScore() {
        int score = 0;
        for (Question question : questionSet) {
            for (String givenAnswer : answerMap.get(question)) {
                if (givenAnswer != null && question.getTrueAnswerSet().contains(givenAnswer)) {
                    score += 1;
                }
            }
        }
        return score;
    }

    public void answer(Question question, String answer) {
        Set<String> answerSet = this.answerMap.get(question);
        if (answerSet == null) {
            answerSet = new HashSet<String>();
        }
        answerSet.add(answer);
        this.answerMap.put(question, answerSet);
    }

    private void setId(String id) {
        if (id == null) throw new QuestionExamException("cannot create questionnary with null id");
        this.id = id;
    }

    private void setQuestionSet(Set<Question> questionSet) {
        if (questionSet == null) throw new QuestionExamException("cannot create questionnay with null question");
        this.questionSet = questionSet;
    }

    @Override
    public boolean equals(Object other) {
        if (other instanceof Questionnary) {
            Questionnary otherQuestionnay = (Questionnary) other;
            boolean sameId = this.getId().compareTo(otherQuestionnay.getId()) == 0;
            return sameId;
        } else {
            return false;
        }
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }

    @Override
    public String toString() {
        return getId();
    }
}
