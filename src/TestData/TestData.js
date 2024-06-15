import { useDispatch, useSelector } from "react-redux";

const TestData = () => {
  const dispatch = useDispatch();
  const dataItems = useSelector((state) => state.Data1.items);
  return (
    <div>
      <input />
      dispatch(DataSliceActions.DISPLAY(variable))
    </div>
  );
};
export default TestData;
