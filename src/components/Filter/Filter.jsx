import { changeFilter } from "../../redux/contacts/contactsActions"
import { useDispatch, useSelector } from 'react-redux';
import style from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter);

  return (
    <section>
      <h2 className={style.Title}>Find contacts by name</h2>
      <input
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e))}
      />
    </section>
  );
};



export default Filter; 