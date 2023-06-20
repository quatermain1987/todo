package com.example.demo.controller;

import com.example.demo.dto.ResponseDTO;
import com.example.demo.dto.TestRequestBodyDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("test") // resource
public class testController {
	@GetMapping("GetMappingTest") // RequestMapping이 상위 메서드에 선언 되었다면 test/GetMappingTest의 리소스 요구됨
	public String testController() {
		return "HEY";
	}

	@GetMapping("/{id}") // 매개변수가 포함된 맵핑
	public String testControllerWithPathVariables(@PathVariable(required = false) int id) {
		// (required = false) > 매개변수가 꼭 필요하지 않아도 됨
		return "requested id is " + id;
	}

	@GetMapping("/testRequestParam") // parameter방식으로 맵핑
	public String testControllerRequestParam(@RequestParam(required = false) int id) {
		return "parameter resource id is " + id;
	}
	
	@GetMapping("/testRequestBody") // Object
	public String testControllerRequestBody(@RequestBody TestRequestBodyDTO testRequestBodyDTO) {
		return "requested id is "+testRequestBodyDTO.getId()+" and message is "+testRequestBodyDTO.getMessage();
	}
	
	@GetMapping("/testResponseBody")
	public ResponseDTO<String> testControllerResponseBody(){
		List<String> list = new ArrayList<String>();
		list.add("ResponserBody Test!");
		ResponseDTO<String> response = ResponseDTO.<String>builder().data(list).build();
		return response;
	}
	
	@GetMapping("/testResponseEntity")
	public ResponseEntity<?> testControllerResponseEntity(){
		List<String> list = new ArrayList<String>();
		list.add("Hey I'm ResponseEntity And you got 400!");
		ResponseDTO<String> response = ResponseDTO.<String>builder().data(list).build();
		// http status  > 400
		return ResponseEntity.badRequest().body(response);
	}
}
