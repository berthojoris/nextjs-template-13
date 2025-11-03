"use client";
import { useState } from "react";

export default function FormElement() {
  const [sliderValue, setSliderValue] = useState(50);
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Form Elements</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Column 1 */}
        <div>
          {/* Text Input */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Text Input
            </label>
            <div className="kt-input">
              <i className="ki-filled ki-user"></i>
              <input
                className="kt-input"
                placeholder="Enter your name"
                type="text"
              />
            </div>
          </div>

          {/* Textarea */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Textarea
            </label>
            <textarea
              className="kt-input h-40"
              rows={6}
              placeholder="Enter your message"
            ></textarea>
          </div>

          {/* Select Dropdown */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Dropdown
            </label>
            <select className="kt-input">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input className="kt-input" placeholder="you@example.com" type="email" />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input className="kt-input" placeholder="Enter password" type="password" />
          </div>

          {/* Number */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number
            </label>
            <input className="kt-input" placeholder="0" type="number" />
          </div>

          {/* URL */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              URL
            </label>
            <input className="kt-input" placeholder="https://example.com" type="url" />
          </div>

          {/* Search */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Search
            </label>
            <input className="kt-input" placeholder="Search..." type="search" />
          </div>
        </div>

        {/* Column 2 */}
        <div>
          {/* Date / Time */}
          <div className="mb-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input className="kt-input" type="date" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time
              </label>
              <input className="kt-input" type="time" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Datetime
              </label>
              <input className="kt-input" type="datetime-local" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Month
              </label>
              <select className="kt-input">
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Week
              </label>
              <input className="kt-input" type="week" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Color
              </label>
              <input className="kt-input" type="color" />
            </div>
          </div>

          {/* Radio Buttons */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Radio Buttons
            </label>
            <div className="flex items-center space-x-5">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="radio-group"
                  className="kt-radio"
                  defaultChecked
                />
                <label className="ml-2 text-sm text-gray-700">Option 1</label>
              </div>
              <div className="flex items-center">
                <input type="radio" name="radio-group" className="kt-radio" />
                <label className="ml-2 text-sm text-gray-700">Option 2</label>
              </div>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Checkboxes
            </label>
            <div className="flex items-center space-x-5">
              <div className="flex items-center">
                <input type="checkbox" className="kt-checkbox" />
                <label className="ml-2 text-sm text-gray-700">Checkbox 1</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="kt-checkbox" />
                <label className="ml-2 text-sm text-gray-700">Checkbox 2</label>
              </div>
            </div>
          </div>

          {/* Range Slider */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Range Slider
            </label>
            <input
              type="range"
              className="w-full"
              min="0"
              max="100"
              value={sliderValue}
              onChange={(e) => setSliderValue(parseInt(e.target.value))}
            />
            <div className="text-center text-sm text-gray-500 mt-1">
              Value: {sliderValue}
            </div>
          </div>

          {/* Switch */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Switch
            </label>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="kt-switch"
                checked={switchValue}
                onChange={() => setSwitchValue(!switchValue)}
              />
              <label className="ml-2 text-sm text-gray-700">
                {switchValue ? "On" : "Off"}
              </label>
            </div>
          </div>

          {/* Telephone */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Telephone
            </label>
            <input className="kt-input" placeholder="(555) 555-1234" type="tel" />
          </div>

          {/* File Uploads */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              File upload
            </label>
            <input className="kt-input" type="file" />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Multiple files
            </label>
            <input className="kt-input" type="file" multiple />
          </div>

          {/* Select Multiple */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Multiple
            </label>
            <select className="kt-input h-40" multiple>
              <option>Alpha</option>
              <option>Bravo</option>
              <option>Charlie</option>
              <option>Delta</option>
            </select>
          </div>

          {/* Select with Optgroups */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select (Grouped)
            </label>
            <select className="kt-input">
              <optgroup label="Group A">
                <option>Item 1</option>
                <option>Item 2</option>
              </optgroup>
              <optgroup label="Group B">
                <option>Item 3</option>
                <option>Item 4</option>
              </optgroup>
            </select>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-5">
        <button className="kt-btn kt-btn-primary" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}
