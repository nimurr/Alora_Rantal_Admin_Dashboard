import React, { useState } from "react";
import { Form, Input, Select } from "antd";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const { Option } = Select;

const UsersCreateByAdmin = () => {
    const [form] = Form.useForm();
    const [password, setPassword] = useState("");

    const onFinish = (values) => {
        console.log("Form Values:", values);
    };

    const confirmPasswordValidator = (_, value) => {
        if (!value || value === password) {
            return Promise.resolve();
        }
        return Promise.reject(new Error("Passwords do not match"));
    };

    return (
        <section className="py-6 ">
            {/* Header */}
            <Link
                to="/user-list"
                className="text-2xl font-semibold mb-4 flex items-center gap-2"
            >
                <FaArrowLeft /> Create User
            </Link>

            {/* Form Card */}
            <div className="w-full max-w-[650px] mx-auto mb-5 border border-[#2cb5eb] mt-5 p-6 bg-white rounded-lg">
                <Form form={form} layout="vertical" onFinish={onFinish}>

                    {/* Role Type */}
                    <Form.Item
                        label="Role Type"
                        name="role"
                        rules={[{ required: true, message: "Please select role type" }]}
                    >
                        <Select className="h-12" placeholder="Select Role">
                            <Option value="apartment_owner">Apartment Owner</Option>
                            <Option value="renter">Renter</Option>
                            <Option value="agent">Agent</Option>
                            <Option value="maintenance">Maintenance crew role</Option>
                            <Option value="pent_house">Pent house</Option>
                            <Option value="sub_admin">Sub admin</Option>
                        </Select>
                    </Form.Item>

                    {/* Apartment Assign */}
                    <Form.Item
                        label="Apartment Assign"
                        name="apartment"
                        rules={[{ required: true, message: "Please select apartment" }]}
                    >
                        <Select className="h-12" showSearch placeholder="Select Apartment">
                            <Option value="suncity">Suncity Apartment</Option>
                            <Option value="green_villa">Green Villa</Option>
                            <Option value="sky_tower">Sky Tower</Option>
                        </Select>
                    </Form.Item>

                    {/* Unit Assign */}
                    <Form.Item
                        label="Unit Assign"
                        name="unit"
                        rules={[{ required: true, message: "Please select unit" }]}
                    >
                        <Select className="h-12" showSearch placeholder="Select Unit">
                            <Option value="A101">A101</Option>
                            <Option value="B202">B202</Option>
                            <Option value="C303">C303</Option>
                        </Select>
                    </Form.Item>

                    {/* Name */}
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: "Please enter name" }]}
                    >
                        <Input className="py-3" placeholder="Enter full name" />
                    </Form.Item>

                    {/* Email */}
                    <Form.Item
                        label="User Email"
                        name="email"
                        rules={[
                            { required: true, message: "Please enter email" },
                            { type: "email", message: "Enter a valid email" },
                        ]}
                    >
                        <Input className="py-3" placeholder="Enter email address" />
                    </Form.Item>

                    {/* Phone */}
                    <Form.Item
                        label="Phone Number"
                        name="phone"
                        rules={[{ required: true, message: "Please enter phone number" }]}
                    >
                        <Input className="py-3" placeholder="Enter phone number" />
                    </Form.Item>

                    {/* Password */}
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            { required: true, message: "Please enter password" },
                            { min: 6, message: "Minimum 6 characters required" },
                        ]}
                        hasFeedback
                    >
                        <Input.Password
                            className="py-3"
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Item>

                    {/* Confirm Password */}
                    <Form.Item
                        label="Confirm Password"
                        name="confirmPassword"
                        dependencies={["password"]}
                        rules={[
                            { required: true, message: "Please confirm password" },
                            { validator: confirmPasswordValidator },
                        ]}
                        hasFeedback
                    >
                        <Input.Password className="py-3" placeholder="Confirm password" />
                    </Form.Item>

                    {/* Submit */}
                    <Form.Item className="flex justify-center mt-6">
                        <button
                            type="submit"
                            className="bg-[#2cb5eb] text-white py-3 px-12  rounded-md text-base"
                        >
                            Create Account
                        </button>
                    </Form.Item>
                </Form>
            </div>
        </section>
    );
};

export default UsersCreateByAdmin;
