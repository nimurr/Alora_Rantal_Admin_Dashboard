import React from "react";
import { Form, Input, Button, Select, Upload } from "antd";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { InboxOutlined } from "@ant-design/icons";

const { Option } = Select;
const { Dragger } = Upload;

const ApartmentCreatorCreate = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Unit Data:", values);
    };

    return (
        <div className="mt-10">
            {/* -------------------- Back Header -------------------- */}
            <Link
                to="/manage-apartments"
                className="text-2xl font-semibold mb-4 flex items-center gap-2"
            >
                <FaArrowLeft /> Edit Unit
            </Link>

            {/* -------------------- Form Card -------------------- */}
            <div className="w-full mx-auto max-w-[700px] border border-[#2cb5eb] mt-5 p-6 bg-white rounded-lg">
                <Form layout="vertical" form={form} onFinish={onFinish}>
                    {/* Unit Name */}
                    <Form.Item
                        label="Unit Name"
                        name="unitName"
                        rules={[{ required: true, message: "Please enter unit name" }]}
                    >
                        <Input className="py-2" placeholder="Enter Unit Name" />
                    </Form.Item>

                    {/* Select Unit */}
                    <Form.Item
                        label="Select Unit"
                        name="unitType"
                        rules={[{ required: true, message: "Please select unit type" }]}
                    >
                        <Select className="h-10" placeholder="Select Unit Type">
                            <Option value="studio">Studio</Option>
                            <Option value="bedroom">Bed Room</Option>
                            <Option value="2bedroom">2 Bed Room</Option>
                            <Option value="3bedroom">3 Bed Room</Option>
                            <Option value="penthouse">Pent House</Option>
                        </Select>
                    </Form.Item>

                    {/* Total Units */}
                    <Form.Item
                        label="Enter Total Number of Unit"
                        name="totalUnit"
                        rules={[{ required: true }]}
                    >
                        <Input className="py-2" type="number" placeholder="Enter total unit count" />
                    </Form.Item>

                    {/* Unit Square Fit */}
                    <Form.Item
                        label="Unit Square fit"
                        name="squareFit"
                        rules={[{ required: true }]}
                    >
                        <Input className="py-2" placeholder="1600" />
                    </Form.Item>

                    {/* Unit Price */}
                    <Form.Item
                        label="Add Unit price"
                        name="price"
                        rules={[{ required: true }]}
                    >
                        <Input className="py-2" prefix="$" placeholder="1590" />
                    </Form.Item>

                    {/* Bed Rooms */}
                    <Form.Item
                        label="Bed Rooms"
                        name="bedRooms"
                        rules={[{ required: true }]}
                    >
                        <Input className="py-2" type="number" placeholder="3" />
                    </Form.Item>

                    {/* Bathrooms */}
                    <Form.Item
                        label="Bathrooms"
                        name="bathRooms"
                        rules={[{ required: true }]}
                    >
                        <Input className="py-2" type="number" placeholder="3" />
                    </Form.Item>

                    {/* Amenities */}
                    <Form.Item
                        label="Add Amenities"
                        name="amenities"
                    >
                        <Input.TextArea
                            rows={3}
                            className="py-2"
                            placeholder="Parking, Gym, Swimming Pool"
                        />
                    </Form.Item>

                    {/* Upload Thumbnail */}
                    <Form.Item label="Upload Thumbnail" name="thumbnail">
                        <Dragger
                            name="files"
                            multiple={false}
                            beforeUpload={() => false}
                            accept=".jpeg,.png"
                        >
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">
                                Upload your Unit image
                            </p>
                            <p className="ant-upload-hint text-gray-500">
                                Please upload file in jpeg or png format and make sure the file size is under 25 MB.
                                <br />
                                <strong>Drop file or browse</strong>
                            </p>
                            <p className="text-sm mt-2">
                                Format: .jpeg, .png & Max file size: 25 MB
                            </p>
                            {/* <Button className="mt-3">Browse Files</Button> */}
                        </Dragger>
                    </Form.Item>

                    {/* Update Button */}
                    <Form.Item className="flex justify-center mt-6">
                        <button
                            type="submit"
                            className="bg-[#2cb5eb] text-white py-3 px-14 text-base rounded-md"
                        >
                            Update
                        </button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default ApartmentCreatorCreate;
