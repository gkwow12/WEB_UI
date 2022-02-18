<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@page import='java.sql.*' %>
    
<%


int empno = Integer.parseInt(request.getParameter("empno"));
int sal = Integer.parseInt(request.getParameter("sal"));
int deptno = Integer.parseInt(request.getParameter("deptno"));
String job = request.getParameter("job");
String ename =request.getParameter("ename");





Class.forName("oracle.jdbc.driver.OracleDriver");
System.out.println("드라이버 로딩 성공");

	String ur1 = "jdbc:oracle:thin:@127.0.0.1:1521:xe";
	String user = "scott";
	String pass = "tiger";

	Connection con = null;
	PreparedStatement ps = null;
	
	
con = DriverManager.getConnection(ur1, user, pass);
System.out.println("DB 연결 성공");

	String sql = "INSERT INTO EMP (empno, sal, deptno, job, ename) VALUES ( ?,?,?,?,?)";

ps = con.prepareStatement(sql);
ps.setInt(1, empno );
ps.setInt(2, sal);
ps.setInt(3, deptno);
ps.setString(4, job);
ps.setString(5, ename);

 ps.executeUpdate();

	ps.close();
	con.close();



%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>사원정보 입력</title>
</head>
<body>
정보가 잘 입력되었습니다


</body>
</html>