package fr.ubordeaux.ao.domain.exception;

public class QuestionExamException extends RuntimeException {
    private static final long serialVersionUID = 1L;

	public QuestionExamException(String msg) {
        super(msg);
    }
}