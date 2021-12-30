import Card from "../UI/Card";
import "./AddNewPost.css";
import { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Radio, Select, Space, Button } from "antd";
import UpLoadImg from "./UpLoadImg";

const AddNewPost = () => {
  const [value, setValue] = useState(1);
  const [tittleValue, setTittleValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [valueColor1, SetvalueColor1] = useState([]);
  const [statusvalue, setstatusvalue] = useState("soldOut");
  const { Option } = Select;

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onChangeStatus = (e) => {
    setstatusvalue(e.target.value);
  };

  const handleChangeSelected = (value) => {
    console.log(`selected ${value}`);
  };

  const onSubmitChenge = (event) => {
    event.preventDefault();
  };

  const onChange1 = (e) => {
    SetvalueColor1(e.target.value);
  };

  return (
    <div className="add-new-post">
      <h1>Add New Post</h1>
      <div className="add-new-post-from">
        <Card className="card-w">
          <Card>
            Giới Tính
            <Radio.Group
              onChange={onChange}
              value={value}
              style={{ margin: 20 }}
            >
              <Radio value={1}>Men</Radio>
              <Radio value={2}>Women</Radio>
            </Radio.Group>
          </Card>
          <Card>
            Loại
            <Select
              defaultValue="Category"
              style={{ width: 120, margin: 20 }}
              onChange={handleChangeSelected}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
            </Select>
          </Card>
          <Card>
            <form onSubmit={onSubmitChenge} style={{ margin: 20 }}>
              <Form.Item label="Tittle">
                <Input
                  placeholder="Tittle..."
                  value={tittleValue}
                  onChange={(e) => setTittleValue(e.target.value)}
                />
              </Form.Item>
              <Form.Item label="Price">
                <Input
                  placeholder="Price..."
                  value={priceValue}
                  onChange={(e) => setPriceValue(e.target.value)}
                />
              </Form.Item>
            </form>
          </Card>
          <Card>
            Size
            <Space direction="Size" style={{ margin: 20 }}>
              <Radio value="Size M">Size (M)</Radio>
              <Radio value="Size L">Size (L)</Radio>
              <Radio value="Size S">Size (S)</Radio>
            </Space>
            <br />
            Color
            <Space direction="Size" style={{ margin: 20 }}>
              <Radio onChange={onChange1} value="Red">
                Red
              </Radio>
              <Radio onChange={onChange1} value="Yellow">
                Yellow
              </Radio>
              <Radio onChange={onChange1} value="Black">
                Black
              </Radio>
              <Radio onChange={onChange1} value="Pink">
                Pink
              </Radio>
              <Radio onChange={onChange1} value="Green">
                Green
              </Radio>
            </Space>
          </Card>
        </Card>

        <Card className="card-w">
          {/* Upload Img */}
          <Card>
            <UpLoadImg />
          </Card>

          <Card>
            Quantity
            <Select defaultValue="Quantity" onChange={handleChangeSelected}>
              <Option value="1">1</Option>
            </Select>
          </Card>

          <Card>
            Status
            <Radio.Group
              onChange={onChangeStatus}
              value={statusvalue}
              style={{ margin: 20 }}
            >
              <Radio value="soldOut">soldOut</Radio>
              <Radio value="stoking">stoking</Radio>
            </Radio.Group>
          </Card>

          <Card>
            <Button type="primary" style={{ margin: 5 }}>
              Create
            </Button>
            <Button type="primary" style={{ margin: 5 }}>
              Update
            </Button>
            <Button type="primary" style={{ margin: 5 }}>
              Delete
            </Button>
          </Card>
        </Card>
      </div>
    </div>
  );
};

export default AddNewPost;
