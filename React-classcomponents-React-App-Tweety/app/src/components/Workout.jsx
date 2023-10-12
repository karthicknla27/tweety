import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "../App.css";
import React, { useState } from "react";

function Workout() {
  const colorSchema = Yup.object().shape({
    colorName: Yup.string()
      .min(2, "required more than 2")
      .max(50, "require less than 50")
      .required("Required"),
  });

  const [colorList, setcolorList] = useState([]);

  function remove(index) {
    console.log(index);
    const kk = colorList.findIndex((num) => num == index);
    console.log(kk);
    colorList.splice(kk, 1);
  }

  return (
    <div>
      <div>
        <h1></h1>
        <Formik
          initialValues={{
            colorName: "",
          }}
          validationSchema={colorSchema}
          onSubmit={(value) => {
            console.log(value);
            const newcolor = {
              colorName: value.colorName,
            };
            setcolorList([...colorList, newcolor]);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <label htmlFor="">colorName</label> <br />
              <Field name="colorName" type="text" />
              {errors.colorName && touched.colorName ? (
                <div>{errors.colorName}</div>
              ) : null}
              <br />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
      <>
        {colorList.length > 0 && (
          <div className="colorlist">
            <h2>color List:</h2>
            <div className="color-list">
              {colorList.map((color, index) => (
                <div className="color-card" key={index}>
                  <h1>{color.colorName}</h1>
                  <button onClick={() => remove(index)}>delete</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    </div>
  );
}

export default Workout;
