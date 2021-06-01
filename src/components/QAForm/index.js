import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { useInput } from "../../Core/Hooks/Input";
import { isObjectEmpty } from "../../Core/Helpers";

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
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

function QAForm({
  onSubmit = () => {},
  initialState = { question: null, answer: null, checked: null },
}) {
  const [form, setForm] = useState(initialState);
  const { value: question, bind: questionBind } = useInput(form.question);
  const { value: answer, bind: answerBind } = useInput(form.answer);
  const { value: checked, bind: checkedBind } = useInput(form.checked);

  const submitLabel = isObjectEmpty(initialState) ? "Add" : "Edit";

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  useEffect(() => {
    setForm({ question, answer, checked });
  }, [question, answer, checked]);

  return (
    <FormWrapper onSubmit={onFormSubmit}>
      <code dangerouslySetInnerHTML={{ __html: JSON.stringify(form) }}></code>
      <Label>Question</Label>
      <Input required="required" {...questionBind} />
      <Label>Answer</Label>
      <TextArea required="required" {...answerBind} />
      <Label>
        <Checkbox {...checkedBind} required="required" type="checkbox" />
        Checkbox
      </Label>
      <SubmitButton type="submit">{submitLabel}</SubmitButton>
    </FormWrapper>
  );
}

export default QAForm;
