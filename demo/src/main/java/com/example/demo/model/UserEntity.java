package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(uniqueConstraints = { @UniqueConstraint(columnNames = "username") })
public class UserEntity {
	
	@Id
	@GeneratedValue(generator = "system-uuid")
	@GenericGenerator(name = "system-uuid", strategy = "uuid")
	private String id;

	@Column(nullable = false)
	private String username;
	
	/*
	 * OAuth를 이용해 SSO(single sign on)을 구현하지 않는다면 password필드는
	 * 반드시 null이면 안된다. 하지만 SSO을 이용해 로그인하는 경우 password가 필요 없다.
	 * 따라서 데이터베이스에 password를 반드시 입력하도록 규제하면 이후 SSO구현 시
	 * 문제가 생기므로 처음부터 null을 입력할 수 있도록 했다.
	 */
	private String password;

	private String role;

	private String authProvider; // example : facebook

}
