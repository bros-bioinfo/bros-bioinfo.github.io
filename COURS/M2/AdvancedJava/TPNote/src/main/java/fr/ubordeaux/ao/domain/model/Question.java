package fr.ubordeaux.ao.domain.model;

import fr.ubordeaux.ao.domain.exception.QuestionExamException;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

public class Question {
    private String question;
    private String description;
    private Set<String> candidateAnswerSet;
    private Set<String> trueAnswerSet;

    public Question(String question, String description, Set<String> candidateAnswerSet, Set<String> trueAnswerSet) {
        this.setQuestion(question);
        this.setDescription(description);
        this.setCandidateAnswerSet(candidateAnswerSet);
        this.setTrueAnswerSet(trueAnswerSet);
    }

    public String getQuestion() {
        return this.question;
    }

    public String getDescription() {
        return this.description;
    }

    public Set<String> getCandidateAnswerSet() {
        return new HashSet<>(this.candidateAnswerSet);
    }

    public Set<String> getTrueAnswerSet() {
        return new HashSet<>(this.trueAnswerSet);
    }

    private void setQuestion(String question) {
        if (question == null) throw new QuestionExamException("cannot create question with null question");
        this.question = question;
    }

    private void setDescription(String description) {
        if (description == null) throw new QuestionExamException("cannot create question with null description");
        this.description = description;
    }

    private void setCandidateAnswerSet(Set<String> candidateAnswerSet) {
        if (candidateAnswerSet == null)
            throw new QuestionExamException("cannot create question with null candidateAnswerSet");
        this.candidateAnswerSet = candidateAnswerSet;
    }

    private void setTrueAnswerSet(Set<String> trueAnswerSet) {
        if (trueAnswerSet == null) throw new QuestionExamException("cannot create question with null trueAnswerSet");
        if (trueAnswerSet.containsAll(this.candidateAnswerSet))
            throw new QuestionExamException("All candidate answers cannot be true");
        trueAnswerSet.forEach(answer -> {
            if (!candidateAnswerSet.contains(answer)) {
                throw new QuestionExamException("All answers must be in candidate answers");
            }
        });
        this.trueAnswerSet = trueAnswerSet;
    }

    @Override
    public boolean equals(Object other) {
        if (other instanceof Question) {
            Question otherQuestion = (Question) other;
            boolean sameQuestion = this.getQuestion().compareTo(otherQuestion.getQuestion()) == 0;
            boolean sameDescription = this.getDescription().compareTo(otherQuestion.getQuestion()) == 0;
            boolean sameCandidateAnswerSet = true;
            boolean sameTrueAnswerSet = true;

            boolean equals = sameQuestion && sameDescription && sameCandidateAnswerSet && sameTrueAnswerSet;
            return equals;
        } else {
            return false;
        }
    }

    @Override
    public int hashCode() {
        return Objects.hash(getQuestion() + getDescription());
    }

    @Override
    public String toString() {
        return question;
    }
}
