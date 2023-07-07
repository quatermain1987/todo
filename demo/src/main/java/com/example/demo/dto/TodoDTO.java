package com.example.demo.dto;

import java.util.Date;

import com.example.demo.model.TodoEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class TodoDTO {
	private String id;
	private String title;
	private Date date;
	private boolean done;

	public TodoDTO(final TodoEntity entity) {
		this.id = entity.getId();
		this.title = entity.getTitle();
		this.date = entity.getDate();
		this.done = entity.isDone();
	}
	
	public static TodoEntity toEntity(final TodoDTO dto) {
	    return TodoEntity.builder()
	        .id(dto.getId())
	        .title(dto.getTitle())
	        .date(dto.getDate())
	        .done(dto.isDone())
	        .build();
	  }
}
