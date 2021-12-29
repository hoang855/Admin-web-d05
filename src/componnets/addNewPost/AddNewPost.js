import Card from "../UI/Card";
import "./AddNewPost.css";
import { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Radio, Select, Space, Upload, Modal, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

// Upload Img
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const AddNewPost = () => {
  const [value, setValue] = useState(1);
  const [tittleValue, setTittleValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [valueColor1, SetvalueColor1] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [statusvalue, setstatusvalue] = useState("soldOut");

  const [uploadImg, setUploadImg] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-2",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-3",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-4",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-xxx",
      percent: 50,
      name: "image.png",
      status: "uploading",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-5",
      name: "image.png",
      status: "error",
    },
  ]);

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

  // upimg
  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ uploadImg }) => setUploadImg({ uploadImg });
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

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
            Size Và Color
            <Space direction="Size" style={{ margin: 20 }}>
              <Radio value="Size M">Size (M)</Radio>
              <Radio value="Size L">Size (L)</Radio>
              <Radio value="Size S">Size (S)</Radio>
            </Space>
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
        {/* Upload Img */}
        <Card className="card-w">
          <Card>
            UpLoad Image
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              uploadImg={uploadImg}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {uploadImg.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal
              visible={previewVisible}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img alt="example" style={{ width: "100%" }} src={previewImage} />
            </Modal>
          </Card>

          <Card>
            Quantity
            <Select defaultValue="Quantity" onChange={handleChangeSelected}>
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
              <Option value="5">5</Option>
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
