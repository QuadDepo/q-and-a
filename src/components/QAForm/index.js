import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { useInput } from "../../Core/Hooks/Input";
import { useCheckbox } from "../../Core/Hooks/Checkbox";

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
  display: block;
  padding: 4px;
  font-size: 12px;
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

const Checkbox = styled.input``;

const SubmitButton = styled.button``;

const CancelButton = styled.button``;

function QAForm({
  onSubmit = () => {},
  onCancel = () => {},
  initialState = { question: "", answer: "", checked: false },
  type = "Add",
}) {
  const [form, setForm] = useState(initialState);
  // Connect Input Hooks
  const { value: question, bind: bindQuestion } = useInput(form.question);
  const { value: answer, bind: bindAnswer } = useInput(form.answer);
  const { checked, bind: bindChecked } = useCheckbox(form.checked);

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(form, e);
  };

  useEffect(() => {
    setForm({ question, answer, checked });
  }, [question, answer, checked]);

  return (
    <FormWrapper onSubmit={onFormSubmit}>
      <code dangerouslySetInnerHTML={{ __html: JSON.stringify(form) }}></code>
      <Label>Question</Label>
      <Input required="required" {...bindQuestion} />
      <Label>Answer</Label>
      <TextArea required="required" {...bindAnswer} />
      <Label>
        <Checkbox {...bindChecked} type="checkbox" />
        Checkbox
      </Label>
      <FormFooter>
        <CancelButton onClick={onCancel}>Cancel</CancelButton>
        <SubmitButton type="submit">{type}</SubmitButton>
      </FormFooter>
    </FormWrapper>
  );
}

export default QAForm;
