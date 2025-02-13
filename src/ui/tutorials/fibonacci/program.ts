const FIBONACCI_PROGRAM = JSON.stringify(
  {
    attributes: [],
    builtins: [],
    compiler_version: "0.13.1",
    data: [
      "0x482680017ffd8000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffff",
      "0x480680017fff8000",
      "0x1",
      "0x480680017fff8000",
      "0x1",
      "0x482480017ffd8000",
      "0x800000000000011000000000000000000000000000000000000000000000000",
      "0x48127ffe7fff8000",
      "0x48307ffd7ffc8000",
      "0x20680017fff7ffd",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffffd",
      "0x208b7fff7fff7ffe",
      "0x480680017fff8000",
      "0x4",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffff2",
      "0x208b7fff7fff7ffe",
    ],
    debug_info: {
      file_contents: {},
      instruction_locations: {
        "0": {
          accessible_scopes: ["fibonacci", "fibonacci.fibonacci"],
          flow_tracking_data: {
            ap_tracking: {
              group: 0,
              offset: 0,
            },
            reference_ids: {
              "fibonacci.fibonacci.n": 0,
            },
          },
          hints: [],
          inst: {
            end_col: 22,
            end_line: 2,
            input_file: {
              filename:
                "/home/antoine/Documents/cairo-vm-gs/cairo0/fibonacci.cairo",
            },
            start_col: 17,
            start_line: 2,
          },
        },
        "2": {
          accessible_scopes: ["fibonacci", "fibonacci.fibonacci"],
          flow_tracking_data: {
            ap_tracking: {
              group: 0,
              offset: 1,
            },
            reference_ids: {
              "fibonacci.fibonacci.n": 1,
            },
          },
          hints: [],
          inst: {
            end_col: 18,
            end_line: 3,
            input_file: {
              filename:
                "/home/antoine/Documents/cairo-vm-gs/cairo0/fibonacci.cairo",
            },
            start_col: 17,
            start_line: 3,
          },
        },
        "4": {
          accessible_scopes: ["fibonacci", "fibonacci.fibonacci"],
          flow_tracking_data: {
            ap_tracking: {
              group: 0,
              offset: 2,
            },
            reference_ids: {
              "fibonacci.fibonacci.i": 2,
              "fibonacci.fibonacci.n": 1,
            },
          },
          hints: [],
          inst: {
            end_col: 18,
            end_line: 4,
            input_file: {
              filename:
                "/home/antoine/Documents/cairo-vm-gs/cairo0/fibonacci.cairo",
            },
            start_col: 17,
            start_line: 4,
          },
        },
        "6": {
          accessible_scopes: ["fibonacci", "fibonacci.fibonacci"],
          flow_tracking_data: {
            ap_tracking: {
              group: 0,
              offset: 3,
            },
            reference_ids: {
              "fibonacci.fibonacci.i": 5,
              "fibonacci.fibonacci.j": 6,
              "fibonacci.fibonacci.n": 4,
              "fibonacci.fibonacci.next": 7,
            },
          },
          hints: [],
          inst: {
            end_col: 22,
            end_line: 12,
            input_file: {
              filename:
                "/home/antoine/Documents/cairo-vm-gs/cairo0/fibonacci.cairo",
            },
            start_col: 17,
            start_line: 12,
          },
        },
        "8": {
          accessible_scopes: ["fibonacci", "fibonacci.fibonacci"],
          flow_tracking_data: {
            ap_tracking: {
              group: 0,
              offset: 4,
            },
            reference_ids: {
              "fibonacci.fibonacci.i": 5,
              "fibonacci.fibonacci.j": 6,
              "fibonacci.fibonacci.n": 8,
              "fibonacci.fibonacci.next": 7,
            },
          },
          hints: [],
          inst: {
            end_col: 21,
            end_line: 9,
            input_file: {
              filename:
                "/home/antoine/Documents/cairo-vm-gs/cairo0/fibonacci.cairo",
            },
            parent_location: [
              {
                end_col: 18,
                end_line: 13,
                input_file: {
                  filename:
                    "/home/antoine/Documents/cairo-vm-gs/cairo0/fibonacci.cairo",
                },
                start_col: 17,
                start_line: 13,
              },
              "While expanding the reference 'j' in:",
            ],
            start_col: 13,
            start_line: 9,
          },
        },
        "9": {
          accessible_scopes: ["fibonacci", "fibonacci.fibonacci"],
          flow_tracking_data: {
            ap_tracking: {
              group: 0,
              offset: 5,
            },
            reference_ids: {
              "fibonacci.fibonacci.i": 9,
              "fibonacci.fibonacci.j": 6,
              "fibonacci.fibonacci.n": 8,
              "fibonacci.fibonacci.next": 7,
            },
          },
          hints: [],
          inst: {
            end_col: 21,
            end_line: 10,
            input_file: {
              filename:
                "/home/antoine/Documents/cairo-vm-gs/cairo0/fibonacci.cairo",
            },
            parent_location: [
              {
                end_col: 21,
                end_line: 14,
                input_file: {
                  filename:
                    "/home/antoine/Documents/cairo-vm-gs/cairo0/fibonacci.cairo",
                },
                start_col: 17,
                start_line: 14,
              },
              "While expanding the reference 'next' in:",
            ],
            start_col: 16,
            start_line: 10,
          },
        },
        "10": {
          accessible_scopes: ["fibonacci", "fibonacci.fibonacci"],
          flow_tracking_data: {
            ap_tracking: {
              group: 0,
              offset: 6,
            },
            reference_ids: {
              "fibonacci.fibonacci.i": 9,
              "fibonacci.fibonacci.j": 10,
              "fibonacci.fibonacci.n": 8,
              "fibonacci.fibonacci.next": 7,
            },
          },
          hints: [],
          inst: {
            end_col: 23,
            end_line: 20,
            input_file: {
              filename:
                "/home/antoine/Documents/cairo-vm-gs/cairo0/fibonacci.cairo",
            },
            start_col: 5,
            start_line: 20,
          },
        },
        "12": {
          accessible_scopes: ["fibonacci", "fibonacci.fibonacci"],
          flow_tracking_data: {
            ap_tracking: {
              group: 0,
              offset: 6,
            },
            reference_ids: {
              "fibonacci.fibonacci.i": 12,
              "fibonacci.fibonacci.j": 13,
              "fibonacci.fibonacci.n": 11,
              "fibonacci.fibonacci.next": 7,
            },
          },
          hints: [],
          inst: {
            end_col: 14,
            end_line: 27,
            input_file: {
              filename:
                "/home/antoine/Documents/cairo-vm-gs/cairo0/fibonacci.cairo",
            },
            start_col: 5,
            start_line: 27,
          },
        },
        "13": {
          accessible_scopes: ["__main__", "__main__.main"],
          flow_tracking_data: {
            ap_tracking: {
              group: 1,
              offset: 0,
            },
            reference_ids: {},
          },
          hints: [],
          inst: {
            end_col: 16,
            end_line: 4,
            input_file: {
              filename: "../../cairo0-test/fibonacci/main.cairo",
            },
            start_col: 15,
            start_line: 4,
          },
        },
        "15": {
          accessible_scopes: ["__main__", "__main__.main"],
          flow_tracking_data: {
            ap_tracking: {
              group: 1,
              offset: 1,
            },
            reference_ids: {},
          },
          hints: [],
          inst: {
            end_col: 17,
            end_line: 4,
            input_file: {
              filename: "../../cairo0-test/fibonacci/main.cairo",
            },
            start_col: 5,
            start_line: 4,
          },
        },
        "17": {
          accessible_scopes: ["__main__", "__main__.main"],
          flow_tracking_data: {
            ap_tracking: {
              group: 2,
              offset: 0,
            },
            reference_ids: {},
          },
          hints: [],
          inst: {
            end_col: 15,
            end_line: 5,
            input_file: {
              filename: "../../cairo0-test/fibonacci/main.cairo",
            },
            start_col: 5,
            start_line: 5,
          },
        },
      },
    },
    hints: {},
    identifiers: {
      "__main__.fibonacci": {
        destination: "fibonacci.fibonacci",
        type: "alias",
      },
      "__main__.main": {
        decorators: [],
        pc: 13,
        type: "function",
      },
      "__main__.main.Args": {
        full_name: "__main__.main.Args",
        members: {},
        size: 0,
        type: "struct",
      },
      "__main__.main.ImplicitArgs": {
        full_name: "__main__.main.ImplicitArgs",
        members: {},
        size: 0,
        type: "struct",
      },
      "__main__.main.Return": {
        cairo_type: "()",
        type: "type_definition",
      },
      "__main__.main.SIZEOF_LOCALS": {
        type: "const",
        value: 0,
      },
      "fibonacci.fibonacci": {
        decorators: [],
        pc: 0,
        type: "function",
      },
      "fibonacci.fibonacci.Args": {
        full_name: "fibonacci.fibonacci.Args",
        members: {
          n: {
            cairo_type: "felt",
            offset: 0,
          },
        },
        size: 1,
        type: "struct",
      },
      "fibonacci.fibonacci.ImplicitArgs": {
        full_name: "fibonacci.fibonacci.ImplicitArgs",
        members: {},
        size: 0,
        type: "struct",
      },
      "fibonacci.fibonacci.Return": {
        cairo_type: "felt",
        type: "type_definition",
      },
      "fibonacci.fibonacci.SIZEOF_LOCALS": {
        type: "const",
        value: 0,
      },
      "fibonacci.fibonacci.body": {
        pc: 6,
        type: "label",
      },
      "fibonacci.fibonacci.end": {
        pc: 12,
        type: "label",
      },
      "fibonacci.fibonacci.i": {
        cairo_type: "felt",
        full_name: "fibonacci.fibonacci.i",
        references: [
          {
            ap_tracking_data: {
              group: 0,
              offset: 2,
            },
            pc: 4,
            value: "[cast(ap + (-1), felt*)]",
          },
          {
            ap_tracking_data: {
              group: 0,
              offset: 3,
            },
            pc: 6,
            value: "[cast(ap + (-2), felt*)]",
          },
          {
            ap_tracking_data: {
              group: 0,
              offset: 5,
            },
            pc: 9,
            value: "[cast(ap + (-1), felt*)]",
          },
          {
            ap_tracking_data: {
              group: 0,
              offset: 6,
            },
            pc: 12,
            value: "[cast(ap + (-2), felt*)]",
          },
        ],
        type: "reference",
      },
      "fibonacci.fibonacci.j": {
        cairo_type: "felt",
        full_name: "fibonacci.fibonacci.j",
        references: [
          {
            ap_tracking_data: {
              group: 0,
              offset: 3,
            },
            pc: 6,
            value: "[cast(ap + (-1), felt*)]",
          },
          {
            ap_tracking_data: {
              group: 0,
              offset: 3,
            },
            pc: 6,
            value: "[cast(ap + (-1), felt*)]",
          },
          {
            ap_tracking_data: {
              group: 0,
              offset: 6,
            },
            pc: 10,
            value: "[cast(ap + (-1), felt*)]",
          },
          {
            ap_tracking_data: {
              group: 0,
              offset: 6,
            },
            pc: 12,
            value: "[cast(ap + (-1), felt*)]",
          },
        ],
        type: "reference",
      },
      "fibonacci.fibonacci.n": {
        cairo_type: "felt",
        full_name: "fibonacci.fibonacci.n",
        references: [
          {
            ap_tracking_data: {
              group: 0,
              offset: 0,
            },
            pc: 0,
            value: "[cast(fp + (-3), felt*)]",
          },
          {
            ap_tracking_data: {
              group: 0,
              offset: 1,
            },
            pc: 2,
            value: "[cast(ap + (-1), felt*)]",
          },
          {
            ap_tracking_data: {
              group: 0,
              offset: 3,
            },
            pc: 6,
            value: "[cast(ap + (-3), felt*)]",
          },
          {
            ap_tracking_data: {
              group: 0,
              offset: 4,
            },
            pc: 8,
            value: "[cast(ap + (-1), felt*)]",
          },
          {
            ap_tracking_data: {
              group: 0,
              offset: 6,
            },
            pc: 12,
            value: "[cast(ap + (-3), felt*)]",
          },
        ],
        type: "reference",
      },
      "fibonacci.fibonacci.next": {
        cairo_type: "felt",
        full_name: "fibonacci.fibonacci.next",
        references: [
          {
            ap_tracking_data: {
              group: 0,
              offset: 3,
            },
            pc: 6,
            value: "cast([ap + (-2)] + [ap + (-1)], felt)",
          },
        ],
        type: "reference",
      },
    },
    main_scope: "__main__",
    prime: "0x800000000000011000000000000000000000000000000000000000000000001",
    reference_manager: {
      references: [
        {
          ap_tracking_data: {
            group: 0,
            offset: 0,
          },
          pc: 0,
          value: "[cast(fp + (-3), felt*)]",
        },
        {
          ap_tracking_data: {
            group: 0,
            offset: 1,
          },
          pc: 2,
          value: "[cast(ap + (-1), felt*)]",
        },
        {
          ap_tracking_data: {
            group: 0,
            offset: 2,
          },
          pc: 4,
          value: "[cast(ap + (-1), felt*)]",
        },
        {
          ap_tracking_data: {
            group: 0,
            offset: 3,
          },
          pc: 6,
          value: "[cast(ap + (-1), felt*)]",
        },
        {
          ap_tracking_data: {
            group: 0,
            offset: 3,
          },
          pc: 6,
          value: "[cast(ap + (-3), felt*)]",
        },
        {
          ap_tracking_data: {
            group: 0,
            offset: 3,
          },
          pc: 6,
          value: "[cast(ap + (-2), felt*)]",
        },
        {
          ap_tracking_data: {
            group: 0,
            offset: 3,
          },
          pc: 6,
          value: "[cast(ap + (-1), felt*)]",
        },
        {
          ap_tracking_data: {
            group: 0,
            offset: 3,
          },
          pc: 6,
          value: "cast([ap + (-2)] + [ap + (-1)], felt)",
        },
        {
          ap_tracking_data: {
            group: 0,
            offset: 4,
          },
          pc: 8,
          value: "[cast(ap + (-1), felt*)]",
        },
        {
          ap_tracking_data: {
            group: 0,
            offset: 5,
          },
          pc: 9,
          value: "[cast(ap + (-1), felt*)]",
        },
        {
          ap_tracking_data: {
            group: 0,
            offset: 6,
          },
          pc: 10,
          value: "[cast(ap + (-1), felt*)]",
        },
        {
          ap_tracking_data: {
            group: 0,
            offset: 6,
          },
          pc: 12,
          value: "[cast(ap + (-3), felt*)]",
        },
        {
          ap_tracking_data: {
            group: 0,
            offset: 6,
          },
          pc: 12,
          value: "[cast(ap + (-2), felt*)]",
        },
        {
          ap_tracking_data: {
            group: 0,
            offset: 6,
          },
          pc: 12,
          value: "[cast(ap + (-1), felt*)]",
        },
      ],
    },
  },
  null,
  2,
);
