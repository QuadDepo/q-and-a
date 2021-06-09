import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { useInput } from "../../Core/Hooks/Input";
import { useCheckbox } from "../../Core/Hooks/Checkbox";
import { ButtonPrimary, ButtonSecondary, ButtonDelete } from "../Button";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items center;
  gap: 16px;
  width: 100%;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 10px;
`;

const InputWrapper = styled.div`
  & + & {
    margin-top: 8px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  resize: vertical;
`;

const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  margin: 0 8px 0 0;
`;

function QAForm({
  onSubmit = () => {},
  initialState = { question: "", answer: "", checked: false },
}) {
  const [form, setForm] = useState(initialState);
  // Connect Input Hooks
  const {
    value: question,
    bind: bindQuestion,
    reset: resetQuestion,
  } = useInput(form.question);

  const {
    value: answer,
    bind: bindAnswer,
    reset: resetAnswer,
  } = useInput(form.answer);
  const {
    checked,
    bind: bindChecked,
    reset: resetChecked,
  } = useCheckbox(form.checked);

  const onFormSubmit = (e) => {
    e && e.preventDefault();
    onSubmit(form, e);
    clearForm();
  };

  const clearForm = (e) => {
    e && e.preventDefault();
    resetQuestion();
    resetAnswer();
    resetChecked();
  };

  useEffect(() => {
    setForm({ question, answer, checked });
  }, [question, answer, checked]);

  return (
    <FormWrapper onSubmit={onFormSubmit}>
      <InputWrapper>
        <Label>Question</Label>
        <Input required="required" {...bindQuestion} />
      </InputWrapper>
      <InputWrapper>
        <Label>Answer</Label>
        <TextArea required="required" {...bindAnswer} />
      </InputWrapper>
      <InputWrapper>
        <Label>
          <Checkbox {...bindChecked} type="checkbox" />
          Want to wait extra long?
        </Label>
      </InputWrapper>
      <FormFooter>
        <ButtonSecondary onClick={clearForm}>Clear</ButtonSecondary>
        <ButtonPrimary type="submit">Add</ButtonPrimary>
      </FormFooter>
    </FormWrapper>
  );
}

export default QAForm;
