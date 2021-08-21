import { Form, Input, Button } from "antd";
import {
  MinusCircleOutlined,
  PlusOutlined,
  PlusCircleFilled,
} from "@ant-design/icons";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

const StepsContainer = () => {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  return (
    <Form
      name="dynamic_form_item"
      {...formItemLayoutWithOutLabel}
      onFinish={onFinish}
    >
      <Form.List
        name="names"
        // rules={[
        //   {
        //     validator: async (_, names) => {
        //       if (!names || names.length < 2) {
        //         return Promise.reject(new Error("At least 2 passengers"));
        //       }
        //     },
        //   },
        // ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={index === 0 ? "Passengers" : ""}
                required={false}
                key={field.key}
              >
                <Form.Item
                  {...field}
                  validateTrigger={["onChange", "onBlur"]}
                  // rules={[
                  //   {
                  //     required: true,
                  //     whitespace: true,
                  //     message:
                  //       "Please input passenger's name or delete this field.",
                  //   },
                  // ]}
                  noStyle
                >
                  <Input
                    placeholder="passenger name"
                    style={{ width: "60%" }}
                  />
                </Form.Item>
                {/* INITIALLY THERE WOULD BE ONE INPUT */}
                {/* {fields.length < 1 ? (
                  <Input placeholder="passenger name" style={{ width: "60%" }} />
                ) : null} */}
              </Form.Item>
            ))}
            {console.log(fields)}

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ width: "60%" }}
                icon={<PlusOutlined />}
              >
                Add Step
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          shape={"circle"}
          icon={<PlusOutlined />}
        ></Button>
      </Form.Item>
    </Form>
  );
};
export default StepsContainer;
